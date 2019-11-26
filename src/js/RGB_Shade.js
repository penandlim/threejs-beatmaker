export const RGB_Log_Shade = (p, c) => {
    let r = Math.round,
        R = c.r * 255,
        G = c.g * 255,
        B = c.b * 255,
        A = c.a ? c.a : null,
        P = p < 0,
        t = P ? 0 : p * 255 ** 2,
        o = P ? 1 + p : 1 - p;
    return {
        r: r((o * R ** 2 + t) ** 0.5 ) / 255,
        g: r((o * G ** 2 + t) ** 0.5 ) / 255,
        b: r((o * B ** 2 + t) ** 0.5 ) / 255,
        a: A
    };
};

export const RGB_Linear_Shade = (p, c) => {
    let r = Math.round,
        R = c.r * 255,
        G = c.g * 255,
        B = c.b * 255,
        A = c.a ? c.a : null,
        P = p < 0,
        t = P ? 0 : 255 * p,
        o = P ? 1 + p : 1 - p;
    return {
        r: r(R * o + t) / 255 ,
        g: r(G * o + t) / 255,
        b: r(B * o + t) / 255,
        a: A
    };
};
