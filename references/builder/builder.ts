/**
 * A 3D builder interface
 */
//% weight=11 icon="\uf1b3" color="#CB48B7" advanced=true
namespace builder {
    /**
     * A 3D builder
     */
    interface BuilderState {
        facing: CompassDirection;
        current?: Position;
        mark?: Position;
        path?: Position[];
        copyStart?: Position;
        copyEnd?: Position;
        origin?: Position;

        structureStarted?: boolean;
        structureMin?: Position;
        structureMax?: Position;
    }

    export class Builder {
        public state: BuilderState = { facing: CompassDirection.North };
        public stack: BuilderState[] = [];

        constructor() {}

        /**
         * Gets the current position of the builder
         */
        public position(): Position {
            if (!this.state.current) {
                this.state.current = player.position().add(positions.create(0, 0, 2))
                this.mark();
            }
            return this.state.current;
        }

        /**
         * Teleports the builder to the specified position
         * @param position the position to move the builder to
         */
        public teleportTo(position: Position): void {
            this.state.current = position.toWorld();

            if (!this.state.mark) {
                this.mark()
            }
            else {
                this.state.path.push(this.state.current);
            }
        }

        /**
         * Moves the builder in the specified direction
         * @param direction the direction in which to move the builder
         * @param blocks how far the builder should move, in blocks, eg: 1
         */
        public move(direction: SixDirection, blocks: number): void {
            let toMove: CardinalDirection;

            switch (direction) {
                case SixDirection.Forward:
                    toMove = this.state.facing as number;
                    break;
                case SixDirection.Back:
                    switch (this.state.facing) {
                        case CompassDirection.East: toMove = CardinalDirection.West; break;
                        case CompassDirection.West: toMove = CardinalDirection.East; break;
                        case CompassDirection.North: toMove = CardinalDirection.South; break;
                        case CompassDirection.South: toMove = CardinalDirection.North; break;
                    }
                    break;
                case SixDirection.Left:
                    toMove = turnDirection(this.state.facing, TurnDirection.Left);
                    break;
                case SixDirection.Right:
                    toMove = turnDirection(this.state.facing, TurnDirection.Right);
                    break;
                case SixDirection.Up:
                    toMove = CardinalDirection.Up;
                    break;
                case SixDirection.Down:
                    toMove = CardinalDirection.Down;
                    break;
            }

            this.state.current = this.position().move(toMove, blocks);
            this.state.path.push(this.state.current);
        }

        /**
         * Moves the builder in multiple directions at once
         * @param forward the number of blocks by which to move forward, eg: 1
         * @param up the number of blocks by which to move up, eg: 1
         * @param left the number of blocks by which to move left, eg: 1
         */
        public shift(forward: number, up: number, left: number) {
            this.move(SixDirection.Forward, forward);
            this.move(SixDirection.Up, up);
            this.move(SixDirection.Left, left);
        }

        /**
         * Turns the builder in the specified direction
         * @param direction the turn direction, eg: TurnDirection.Left
         */
        public turn(direction: TurnDirection) {
            this.state.facing = turnDirection(this.state.facing, direction) as number;
        }

        /**
         * Makes the builder face the specified direction
         * @param direction the direction that the builder should face after the turn
         */
        public face(direction: CompassDirection) {
            this.state.facing = direction;
        }

        /**
         * Marks the current builder's position
         */
        public mark(): void {
            this.state.mark = this.position();
            this.state.path = [this.state.mark];

            if (!this.state.origin) {
                this.state.origin = this.state.current;
            }
        }

        /**
         * Sets the builder's origin to the builder's current location
         */
        public setOrigin(): void {
            this.state.origin = this.position();
        }

        /**
         * Teleports the builder to its origin
         */
        public teleportToOrigin(): void {
            this.teleportTo(this.state.origin);
        }

        /**
         * Places a block at the current location and sets the mark
         * @param block the type of block to place
         */
        public place(block: number): void {
            this.updateStructureBounds();

            blocks.place(block, this.position());
        }

        /**
         * Creates a line of blocks between the builder's current position and the last marked position
         * @param block the type of block to use to build line
         */
        public line(block: number): void {
            if (!this.state.current) {
                this.mark();
            }

            this.updateStructureBounds();
            this.updateStructureBounds(this.state.mark);

            shapes.line(block, this.state.mark, this.state.current);
        }

        /**
         * Fills the volume between the current position and the previous mark
         * @param block the type of block to use to fill the region
         */
        public fill(block: number, operator?: FillOperation): void {
            if (!this.state.current) {
                this.mark();
            }

            this.updateStructureBounds();
            this.updateStructureBounds(this.state.mark);

            blocks.fill(block, this.state.mark, this.state.current, operator)
        }

        /**
         * Traces the path travelled since the last marked position with the specified block type
         * @param block the type of block to use to trace the builder's path
         */
        public tracePath(block: number) {
            if (!this.state.current) {
                this.mark();
            }

            this.updateStructureBounds();

            if (this.state.path.length <= 1) {
                this.place(block);
            }
            else {
                for (let i = 1; i < this.state.path.length; i++) {
                    const fromPosition = this.state.path[i - 1];
                    const toPosition = this.state.path[i];

                    this.updateStructureBounds(fromPosition);
                    this.updateStructureBounds(toPosition);

                    shapes.line(block, fromPosition, toPosition);
                }
            }
        }

        /**
         * Raises a wall of the specified block type and height along the path the builder travelled since the last marked position
         * @param block the type of block to use for the wall
         * @param height the height of the wall in blocks, eg: 5
         */
        public raiseWall(block: number, height: number) {
            if (height == 0) return;
            const dh = positions.create(0, height - 1, 0);
            if (!this.state.current) {
                this.mark();
            }

            this.updateStructureBounds();

            if (this.state.path.length <= 1) {
                const toPosition = this.state.current.add(dh);
                this.updateStructureBounds(toPosition);
                blocks.fill(block, this.state.current, toPosition);
            }
            else {
                for (let i = 1; i < this.state.path.length; i++) {
                    const fromPosition = this.state.path[i - 1];
                    const toPosition = this.state.path[i];

                    this.updateStructureBounds(fromPosition);
                    this.updateStructureBounds(fromPosition.add(dh))

                    this.updateStructureBounds(toPosition);
                    this.updateStructureBounds(toPosition.add(dh))

                    shapes.line(block, fromPosition, toPosition, dh);
                }
            }
        }

        /**
         * Copies the cubic region from the last marked position to the builder's current position
         */
        public copy() {
            this.state.copyStart = this.position();
            this.state.copyEnd = this.state.mark;
        }

        /**
         * Pastes the previously copied region at the builder's current position
         */
        public paste() {
            if (!this.state.copyStart) {
                return;
            }

            const copyStart = this.state.copyStart.toWorld();
            const copyEnd = this.state.copyEnd.toWorld();
            const current = this.state.current.toWorld();

            this.updateStructureBounds(current);
            this.updateStructureBounds(
                current.add(
                    world(
                        copyEnd.getValue(Axis.X) - copyStart.getValue(Axis.X),
                        copyEnd.getValue(Axis.Y) - copyStart.getValue(Axis.Y),
                        copyEnd.getValue(Axis.Z) - copyStart.getValue(Axis.Z)
                    )
                )
            );

            blocks.clone(copyStart, copyEnd, current, CloneMask.Replace, CloneMode.Force);
        }

        /**
         * Pushes the builder's curent state onto the state this.stack
         */
        public pushState() {
            let clonedState: BuilderState = { facing: this.state.facing };

            clonedState.current = this.state.current;
            clonedState.mark = this.state.mark;
            clonedState.copyStart = this.state.copyStart;
            clonedState.copyEnd = this.state.copyEnd;
            clonedState.origin = this.state.origin;

            if (this.state.path) {
                clonedState.path = [];
                for (let i = 0; i < this.state.path.length; i++) {
                    clonedState.path.push(this.state.path[i]);
                }
            }

            this.stack.push(clonedState);
        }

        /**
         * Reverts the builder's state to the most recently pushed state on the state this.stack
         */
        public popState() {
            if (this.stack.length) {
                this.state = this.stack[this.stack.length - 1];
                this.stack.splice(this.stack.length - 1, 1)
            }
        }

        /**
         * Starts a structure. Placing, filling, or drawing lines with blocks will cause
         * locations to be added to the structure. Use "save structure" to save the structure
         * to memory and "load structure" to instantly rebuild it.
         */
        public startStructure() {
            this.state.structureStarted = true;
            this.state.structureMax = undefined;
            this.state.structureMin = undefined;
            this.updateStructureBounds();
        }


        /**
         * Saves the current structure. Only does anything if called after "start structure"
         */
        public saveStructure(name: string, includeEntities?: boolean, replaceAirWithVoid?: boolean) {
            if (!this.state.structureStarted) {
                player.errorMessage("Calling 'builder save structure' before calling 'builder start structure' is not supported!")
                return;
            }

            if (replaceAirWithVoid) {
                player.execute(`fill ${this.state.structureMin.toString()} ${this.state.structureMax.toString()} structure_void replace air`)
            }

            blocks.saveStructure(name, this.state.structureMin, this.state.structureMax, includeEntities);

            this.state.structureStarted = false;
            this.state.structureMax = undefined;
            this.state.structureMin = undefined;
        }

        /**
         * Loads a structure with the given name at the builder's current position.
         */
        public loadStructure(name: string, rotation?: number, mirror?: number) {
            blocks.loadStructure(name, this.position(), rotation, mirror);
        }

        protected updateStructureBounds(position?: Position) {
            if (!this.state.structureStarted) return;

            const current = (position || this.position()).toWorld();

            if (!this.state.structureMin) {
                this.state.structureMin = current;
                this.state.structureMax = current;
            }
            else {
                this.state.structureMin = world(
                    Math.min(current.getValue(Axis.X), this.state.structureMin.getValue(Axis.X)),
                    Math.min(current.getValue(Axis.Y), this.state.structureMin.getValue(Axis.Y)),
                    Math.min(current.getValue(Axis.Z), this.state.structureMin.getValue(Axis.Z))
                );

                this.state.structureMax = world(
                    Math.max(current.getValue(Axis.X), this.state.structureMax.getValue(Axis.X)),
                    Math.max(current.getValue(Axis.Y), this.state.structureMax.getValue(Axis.Y)),
                    Math.max(current.getValue(Axis.Z), this.state.structureMax.getValue(Axis.Z))
                );
            }
        }
    }

    let _builder: Builder = new Builder();

    /**
     * Gets the current position of the builder
     */
    //% help=builder/position
    //% weight=210 blockGap=60
    //% blockId=minecraftBuilderPosition block="builder position"
    export function position(): Position {
        return _builder.position();
    }

    /**
     * Teleports the builder to the specified position
     * @param position the position to move the builder to
     */
    //% help=builder/teleport-to
    //% weight=330
    //% blockId=minecraftBuilderGoTo block="builder teleport to |%position=minecraftCreatePosition"
    export function teleportTo(position: Position): void {
        _builder.teleportTo(position);
    }

    /**
     * Moves the builder in the specified direction
     * @param direction the direction in which to move the builder
     * @param blocks how far the builder should move, in blocks, eg: 1
     */
    //% help=builder/move
    //% weight=360
    //% blockId=minecraftBuilderMove block="builder move|%direction|by %blocks"
    export function move(direction: SixDirection, blocks: number): void {
        _builder.move(direction, blocks);
    }

    /**
     * Moves the builder in multiple directions at once
     * @param forward the number of blocks by which to move forward, eg: 1
     * @param up the number of blocks by which to move up, eg: 1
     * @param left the number of blocks by which to move left, eg: 1
     */
    //% help=builder/shift
    //% weight=270
    //% blockId=minecraftBuilderShift block="builder move forward %forward| up %up| left %left"
    export function shift(forward: number, up: number, left: number) {
        _builder.shift(forward, up, left);
    }

    /**
     * Turns the builder in the specified direction
     * @param direction the turn direction, eg: TurnDirection.Left
     */
    //% help=builder/turn
    //% weight=350
    //% blockId=minecraftBuilderTurn block="builder turn|%direction"
    export function turn(direction: TurnDirection) {
        _builder.turn(direction);
    }

    /**
     * Makes the builder face the specified direction
     * @param direction the direction that the builder should face after the turn
     */
    //% help=builder/face
    //% weight=240
    //% blockId=minecraftBuilderFace block="builder face|%direction"
    export function face(direction: CompassDirection) {
        _builder.face(direction);
    }

    /**
     * Marks the current builder's position
     */
    //% help=builder/mark
    //% weight=340
    //% blockId=minecraftBuilderMark block="builder place mark"
    export function mark(): void {
        _builder.mark();
    }

    /**
     * Sets the builder's origin to the builder's current location
     */
    //% help=builder/set-origin
    //% weight=230
    //% blockId=minecraftBuilderSetOrigin block="builder set origin"
    export function setOrigin(): void {
        _builder.setOrigin();
    }

    /**
     * Teleports the builder to its origin
     */
    //% help=builder/teleport-to-origin
    //% weight=220
    //% blockId=minecraftBuilderTeleportOrigin block="builder teleport to origin"
    export function teleportToOrigin(): void {
        _builder.teleportToOrigin();
    }

    /**
     * Places a block at the current location and sets the mark
     * @param block the type of block to place
     */
    //% help=builder/place
    //% weight=320
    //% blockId=minecraftBuilderPlace block="place %block=minecraftBlock"
    //% block.shadow=minecraftBlock
    export function place(block: number): void {
        _builder.place(block);
    }

    /**
     * Creates a line of blocks between the builder's current position and the last marked position
     * @param block the type of block to use to build line
     */
    //% help=builder/line
    //% weight=250
    //% blockId=minecraftBuilderLine block="builder line from mark with %block=minecraftBlock"
    //% block.shadow=minecraftBlock
    export function line(block: number): void {
        _builder.line(block);
    }

    /**
     * Fills the volume between the current position and the previous mark
     * @param block the type of block to use to fill the region
     */
    //% help=builder/fill
    //% weight=260
    //% blockId=minecraftBuilderFill block="builder fill from mark with %block=minecraftBlock"
    //% block.shadow=minecraftBlock
    export function fill(block: number, operator?: FillOperation): void {
        _builder.fill(block, operator);
    }

    /**
     * Traces the path travelled since the last marked position with the specified block type
     * @param block the type of block to use to trace the builder's path
     */
    //% help=builder/trace-path
    //% weight=310 blockGap=60
    //% blockId=minecraftBuilderTrace block="builder trace path from mark with %block=minecraftBlock"
    //% block.shadow=minecraftBlock
    export function tracePath(block: number) {
        _builder.tracePath(block);
    }

    /**
     * Raises a wall of the specified block type and height along the path the builder travelled since the last marked position
     * @param block the type of block to use for the wall
     * @param height the height of the wall in blocks, eg: 5
     */
    //% help=builder/raise-wall
    //% weight=150
    //% blockId=minecraftBuildereWall block="builder raise wall from mark with %block=minecraftBlock|of %height"
    //% block.shadow=minecraftBlock
    export function raiseWall(block: number, height: number) {
        _builder.raiseWall(block, height);
    }

    /**
     * Copies the cubic region from the last marked position to the builder's current position
     */
    //% help=builder/copy
    //% weight=140
    //% blockId=minecraftBuilderCopy block="builder copy from mark" blockGap=8
    export function copy() {
        _builder.copy();
    }

    /**
     * Pastes the previously copied region at the builder's current position
     */
    //% help=builder/paste
    //% weight=130
    //% blockId=minecraftBuilderPaste block="builder paste"
    export function paste() {
        _builder.paste();
    }

    /**
     * Pushes the builder's curent state onto the state stack
     */
    //% help=builder/push-state
    //% weight=120
    //% blockId=minecraftBuilderPushState block="builder push state" blockGap=8
    export function pushState() {
        _builder.pushState();
    }

    /**
     * Reverts the builder's state to the most recently pushed state on the state stack
     */
    //% help=builder/pop-state
    //% weight=110
    //% blockId=minecraftBuilderPopState block="builder pop state"
    //% blockGap=60
    export function popState() {
        _builder.popState();
    }

    /**
     * Starts a structure. Placing, filling, or drawing lines with blocks will cause
     * locations to be added to the structure. Use "save structure" to save the structure
     * to memory and "load structure" to instantly rebuild it.
     */
    //% help=builder/start-structure
    //% weight=90
    //% blockId=minecraftBuilderStartStructure
    //% block="builder start structure"
    export function startStructure() {
        _builder.startStructure();
    }


    /**
     * Saves the structure with the given name. The sturcture is only saved if called after "start structure"
     */
    //% help=builder/save-structure
    //% weight=80
    //% blockId=minecraftBuilderSaveStructure
    //% block="builder save structure as $name||include entities $includeEntities replace air with void $replaceAirWithVoid"
    //% name.defl="my structure"
    export function saveStructure(name: string, includeEntities?: boolean, replaceAirWithVoid?: boolean) {
        _builder.saveStructure(name, includeEntities, replaceAirWithVoid);
    }

    /**
     * Loads a structure with the given name at the builder's current position.
     */
    //% help=builder/load-structure
    //% weight=70
    //% blockId=minecraftBuilderLoadStructure
    //% block="builder load structure $name||rotated $rotation mirrored $mirror"
    //% rotation.shadow=minecraftStructureRotation
    //% mirror.shadow=minecraftStructureMirrorAxis
    //% name.defl="my structure"
    export function loadStructure(name: string, rotation?: number, mirror?: number) {
        _builder.loadStructure(name, rotation, mirror);
    }

    function turnDirection(facing: CompassDirection, direction: TurnDirection) {
        if (direction === TurnDirection.Left) {
            switch (facing) {
                case CompassDirection.East: return CardinalDirection.North;
                case CompassDirection.West: return CardinalDirection.South;
                case CompassDirection.North: return CardinalDirection.West;
                default: return CardinalDirection.East;
            }
        }
        else {
            switch (facing) {
                case CompassDirection.East: return CardinalDirection.South;
                case CompassDirection.West: return CardinalDirection.North;
                case CompassDirection.North: return CardinalDirection.East;
                default: return CardinalDirection.West;
            }
        }
    }
}