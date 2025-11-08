namespace blocks {
    /**
     * Saves the structure name within a range of positions as a named object.
     */
    //% blockId=minecraftSaveStructure
    //% block="save structure $name from $from to $to||include entities $includeEntities include blocks $includeBlocks and save to $saveMode"
    //% name.defl="my structure"
    //% from.shadow=minecraftCreatePosition
    //% to.shadow=minecraftCreatePosition
    //% includeEntities.defl=true
    //% includeBlocks.defl=true
    //% weight=100 help=blocks/save-structure
    //% group="Structures"
    export function saveStructure(name: string, from: Position, to: Position, includeEntities = true, saveMode = StructureSaveMode.Memory, includeBlocks = true) {
        const mode = saveMode === StructureSaveMode.Disk ? "disk" : "memory";

        player.execute(`structure save ${escapeStructureName(name)} ${from.toWorld().toString()} ${to.toWorld().toString()} ${!!includeEntities} ${mode} ${!!includeBlocks}`);
    }

    /**
     * Loads a structure with the given name at the player's current position.
     */
    //% blockId=minecraftLoadStructure
    //% block="load structure $name to $to||rotated $rotation mirrored $mirror animated $animationMode animation seconds $animationSeconds include entities $includeEntities include blocks $includeBlocks integrity $integrity"
    //% name.defl="my structure"
    //% to.shadow=minecraftCreatePosition
    //% rotation.shadow=minecraftStructureRotation
    //% mirror.shadow=minecraftStructureMirrorAxis
    //% includeEntities.defl=true
    //% includeBlocks.defl=true
    //% integrity.defl=100
    //% weight=90 help=blocks/load-structure
    //% group="Structures"
    export function loadStructure(name: string, to: Position, rotation?: number, mirror?: number, animationMode?: StructureAnimationMode, animationSeconds?: number, includeEntities = true, includeBlocks = true, integrity = 100) {
        let rotationId: string;
        switch (rotation || StructureRotation.Degrees0) {
            case StructureRotation.Degrees90:
                rotationId = "90_degrees";
                break;
            case StructureRotation.Degrees180:
                rotationId = "180_degrees";
                break;
            case StructureRotation.Degrees270:
                rotationId = "270_degrees";
                break;
            case StructureRotation.Degrees0:
            default:
                rotationId = "0_degrees";
                break;
        }

        let mirrorId: string;
        switch (mirror || StructureMirrorAxis.None) {
            case StructureMirrorAxis.X:
                mirrorId = "x";
                break;
            case StructureMirrorAxis.Z:
                mirrorId = "z";
                break;
            case StructureMirrorAxis.XZ:
                mirrorId = "xz";
                break;
            case StructureMirrorAxis.None:
            default:
                mirrorId = "none";
                break;
        }

        let animationId: string;
        switch (animationMode) {
            case StructureAnimationMode.BlockByBlock:
                animationId = "block_by_block";
                break;
            case StructureAnimationMode.LayerByLayer:
                animationId = "layer_by_layer";
                break;
            case StructureAnimationMode.None:
            default:
                animationId = "false";
                break;
        }

        if (animationSeconds <= 0) {
            animationSeconds = 0;
        }
        else if (animationSeconds == undefined) {
            animationSeconds = 0;
        }
        animationSeconds = Math.round(animationSeconds);

        integrity = Math.round(Math.max(Math.min(integrity, 100), 0));

        const commandArgs = [
            escapeStructureName(name),
            to.toWorld().toString(),
            rotationId,
            mirrorId,
        ]

        if (animationId !== "false") {
            commandArgs.push(animationId);
            commandArgs.push(animationSeconds + "");
        }

        commandArgs.push(!!includeEntities + "");
        commandArgs.push(!!includeBlocks + "");
        commandArgs.push(integrity + "");

        const execString = `structure load ${commandArgs.join(" ")}`;
        player.execute(execString);
    }

    /**
     * Deletes the structure with the given name from memory.
     */
    //% blockId=minecraftDeleteStructure
    //% block="delete structure $name"
    //% name.defl="my structure"
    //% weight=80 help=blocks/delete-structure
    //% group="Structures"
    export function deleteStructure(name: string) {
        player.execute(`structure delete ${escapeStructureName(name)}`);
    }

    /**
     * Simply removes the characters " and ' and wraps in quotes
     */
    function escapeStructureName(name: string) {
        let out = "\"";

        for (const char of name) {
            if (char === "\"" || char === "\'") continue;
            out += char;
        }
        out += "\"";

        return out;
    }
}