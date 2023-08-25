import * as translate from "google-translate-api";

export class traductor {
    traducir(s: string, In: string, Out: string) {
        translate(s,{from: In, to: Out}).then(res => {
            return res.text;
        }).catch(err => console.log(err));
    }
}
