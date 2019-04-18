class GraphicsDrawUtil {
    constructor() {

    }
    /**
     * 画圆角矩形
     * @param g 画笔
     * @param l left
     * @param t top
     * @param r right
     * @param b bottom
     * @param w 父宽
     * @param h 父高
     * @param c 圆角半径
     * @param color 填充色
     */
    public static drawRounded(g: Laya.Graphics, l: number, t: number, r: number, b: number, w: number, h: number, c: number, color: string) {
        g.drawPath(0, 0, [
            ["moveTo", l + c, t],
            ["lineTo", w - r - c, t],
            ["arcTo", w - r, t, w - r, c + t, c],
            ["lineTo", w - r, h - b - c],
            ["arcTo", w - r, h - b, w - r - c, h - b, c],
            ["lineTo", c + l, h - b],
            ["arcTo", l, h - b, l, h - b - c, c],
            ["lineTo", l, c + t],
            ["arcTo", l, t, c + l, t, c],
            ["closePath"]
        ],
            {
                fillStyle: color
            })
    }


    public static drawLine(g: Laya.Graphics, l: number, t: number, r: number, b: number, w: number, h: number, color: string, lw: number) {
        if (l !== null && r !== null) {
            if (t !== null) {
                g.drawLine(l, t, w - r, t, color, lw)
                return
            }
            if (b !== null) {
                g.drawLine(l, h - b, w - r, h - b, color, lw)
                return
            }
            return
        }
        if (t !== null && b !== null) {
            if (l !== null) {
                g.drawLine(l, t, l, h - b, color, lw)
                return
            }
            if (r !== null) {
                g.drawLine(w - r, t, w - r, h - b, color, lw)
                return
            }
        }
    }
}