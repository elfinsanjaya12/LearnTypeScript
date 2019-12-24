interface Leptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Leptop {
  name: string;
  isGamming: boolean;
  constructor(name: string, isGamming: boolean) {
    this.name = name;
    this.isGamming = isGamming;
  }
  on(): void {
    console.log("Nyala")
  }
  off(): void {
    console.log("Mati")
  }
}

class MacBook implements Leptop {
  name: string;
  keyboord: boolean;
  constructor(name: string, keyboord: boolean) {
    this.name = name;
    this.keyboord = keyboord;
  }
  on(): void {
    console.log("Nyala")
  }
  off(): void {
    console.log("Mati")
  }
}

const asus = new Asus("Asus", true);
asus.on();
asus.off();

const mb = new MacBook("MacBook", true);
mb.on();
mb.off();