/**
 * Fill lines, spheres and other geometric shapes
 */
//% weight=10 icon="\uf111" color=#EC7505 advanced=true
namespace shapes {
    /**
     * Fill a line of blocks from one position to another.
     */
    //% blockId=minecraftLine block="line of %block=minecraftBlock|from %p0=minecraftCreatePosition|to %p1=minecraftCreatePosition"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1 weight=100
    //% help=shapes/line
    export function line(block: number, p0: Position, p1: Position, extrusion?: Position) {
        // handle world vs local coordinates
        p0 = p0.toWorld();
        p1 = p1.toWorld();

        const ext = extrusion ? extrusion : positions.create(0, 0, 0);
        // Bresenham algorithm
        let x0 = Math.round(p0.getValue(Axis.X));
        let x1 = Math.round(p1.getValue(Axis.X));
        let y0 = Math.round(p0.getValue(Axis.Y));
        let y1 = Math.round(p1.getValue(Axis.Y));
        let z0 = Math.round(p0.getValue(Axis.Z));
        let z1 = Math.round(p1.getValue(Axis.Z));

        // using fill for straight lines if at least 2 coordinate are the same
        if ((x0 == x1 ? 1 : 0) + (y0 == y1 ? 1 : 0) + (z0 == z1 ? 1 : 0) >= 2) {
            // 1D volume
            blocks.fill(block, p0, p1.add(ext));
            return;
        }

        const dx = Math.abs(x1 - x0)
        const sx = x0 < x1 ? 1 : -1;
        const dy = Math.abs(y1 - y0)
        const sy = y0 < y1 ? 1 : -1;
        const dz = Math.abs(z1 - z0)
        const sz = z0 < z1 ? 1 : -1;
        let dm = dx > dy ? dx : dy;
        dm = dm > dz ? dm : dz;
        let i = dm;
        x1 = dm / 2;
        y1 = dm / 2;
        z1 = dm / 2;

        for (let i = 0; i <= dm; ++i) {
            const p = positions.createWorld(x0, y0, z0);
            if (!extrusion)
                blocks.place(block, p);
            else
                blocks.fill(block, p, p.add(extrusion));

            x1 -= dx;
            if (x1 < 0) {
                x1 += dm;
                x0 += sx;
            }

            y1 -= dy;
            if (y1 < 0) {
                y1 += dm;
                y0 += sy;
            }

            z1 -= dz;
            if (z1 < 0) {
                z1 += dm;
                z0 += sz;
            }
        }
    }

    // https://en.wikipedia.org/wiki/Midpoint_circle_algorithm
    function drawCircle(x0: number, y0: number, radius: number, block: number, toWorld: (x: number, y: number) => Position) {
        x0 = Math.round(x0);
        y0 = Math.round(y0);
        radius = Math.round(radius);

        let x = radius;
        let y = 0;
        let err = 0;

        while (x >= y) {
            blocks.place(block, toWorld(x0 + x, y0 + y));
            blocks.place(block, toWorld(x0 + x, y0 - y))

            blocks.place(block, toWorld(x0 + y, y0 + x));
            blocks.place(block, toWorld(x0 + y, y0 - x));

            blocks.place(block, toWorld(x0 - y, y0 + x));
            blocks.place(block, toWorld(x0 - y, y0 - x));

            blocks.place(block, toWorld(x0 - x, y0 + y));
            blocks.place(block, toWorld(x0 - x, y0 - y));


            if (err <= 0) {
                y += 1;
                err += 2 * y + 1;
            }
            if (err > 0) {
                x -= 1;
                err -= 2 * x + 1;
            }
        }
    }

    function fillCircle(x0: number, y0: number, radius: number, block: number, toWorld: (x: number, y: number) => Position) {
        x0 = Math.round(x0);
        y0 = Math.round(y0);
        radius = Math.round(radius);

        let x = radius;
        let y = 0;
        let err = 0;

        while (x >= y) {
            blocks.fill(block, toWorld(x0 + x, y0 + y), toWorld(x0 + x, y0 - y));
            blocks.fill(block, toWorld(x0 + y, y0 + x), toWorld(x0 + y, y0 - x));
            blocks.fill(block, toWorld(x0 - y, y0 + x), toWorld(x0 - y, y0 - x));
            blocks.fill(block, toWorld(x0 - x, y0 + y), toWorld(x0 - x, y0 - y));

            if (err <= 0) {
                y += 1;
                err += 2 * y + 1;
            }
            if (err > 0) {
                x -= 1;
                err -= 2 * x + 1;
            }
        }
    }

    /**
     * Fill a circle of blocks at a center position.
     * @param radius the radius of the circle, eg: 5
     */
    //% blockId=minecraftCircle block="circle of %block=minecraftBlock|center %center=minecraftCreatePosition|radius %radius|around %orientation|%operator"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1 weight=95
    //% help=shapes/circle
    export function circle(block: number,
        center: Position,
        radius: number,
        orientation: Axis,
        operator: ShapeOperation) {
        if (radius <= 0) return;

        if (operator == ShapeOperation.Hollow) {
            circle(Block.Air, center, radius, orientation, ShapeOperation.Replace);
            circle(block, center, radius, orientation, ShapeOperation.Outline);
            return;
        }

        center = center.toWorld();
        const xc = center.getValue(Axis.X);
        const yc = center.getValue(Axis.Y);
        const zc = center.getValue(Axis.Z);

        if (orientation == Axis.Y) {
            const toWorld = (x: number, z: number) => positions.createWorld(x, yc, z);
            if (operator == ShapeOperation.Outline) {
                drawCircle(xc, zc, radius, block, toWorld);
            } else if (operator == ShapeOperation.Replace) {
                fillCircle(xc, zc, radius, block, toWorld);
            }
        } else if (orientation == Axis.Z) {
            const toWorld = (x: number, y: number) => positions.createWorld(x, y, zc);
            if (operator == ShapeOperation.Outline) {
                drawCircle(xc, yc, radius, block, toWorld);
            } else if (operator == ShapeOperation.Replace) {
                fillCircle(xc, yc, radius, block, toWorld);
            }
        } else { // X axis
            const toWorld = (y: number, z: number) => positions.createWorld(xc, y, z);
            if (operator == ShapeOperation.Outline) {
                drawCircle(yc, zc, radius, block, toWorld);
            } else if (operator == ShapeOperation.Replace) {
                fillCircle(yc, zc, radius, block, toWorld);
            }
        }
    }

    /**
     * Fill a sphere of blocks at a center position.
     * @param radius the radius of the sphere, eg: 5
     */
    //% blockId=minecraftSphere block="sphere of %block=minecraftBlock|center %center=minecraftCreatePosition|radius %radius|%operator"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% help=shapes/sphere
    export function sphere(block: number, center: Position, radius: number, operator: ShapeOperation) {
        if (radius <= 0) return;

        radius = Math.round(radius);

        center = center.toWorld();
        const xc = Math.round(center.getValue(Axis.X));
        const yc = Math.round(center.getValue(Axis.Y));
        const zc = Math.round(center.getValue(Axis.Z));
        const radius2 = radius * radius;
        const radiuso = (radius - 1) * (radius - 1)
        for (let x = -radius; x <= radius; ++x) {
            const x2 = x * x;
            for (let y = -radius; y <= radius; ++y) {
                const y2 = y * y;
                if (x2 + y2 > radius2) continue;

                for (let z = -radius; z <= radius; ++z) {
                    const z2 = z * z;
                    if (x2 + y2 + z2 > radius2) continue;
                    const p = positions.createWorld(xc + x, yc + y, zc + z);

                    if (operator == ShapeOperation.Replace || x2 + y2 + z2 >= radiuso)   // on the "crust"
                        blocks.place(block, p);
                    else if (operator == ShapeOperation.Hollow)
                        blocks.place(Block.Air, p);
                }
            }
        }
    }
}