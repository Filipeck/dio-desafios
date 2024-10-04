class heroi {
    constructor(classe, level, tipo) {
      this.classe = classe;
      this.level = level;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      let dano;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          dano = 150 * this.level;
          break;
        case 'guerreiro':
          ataque = 'espada';
          dano = 80 * this.level;
          break;
        case 'monge':
          ataque = 'artes marciais';
          dano = 70 * this.level;
          break;
        case 'ninja':
          ataque = 'shuriken';
          dano = 60 * this.level;
          break;
        default:
          ataque = 'ataque padrão';
          dano = 50 * this.level;
      }
      console.log(`O ${this.tipo} (Lvl ${this.level}) atacou usando ${ataque} e causou ${dano} pontos de dano.`);
    }
  }
  
  // Exemplo de uso
  const heroiA = new heroi('Arthur', 30, 'guerreiro');
  heroiA.atacar()
  
  const heroiB = new heroi('Merlin', 150, 'mago');
  heroiB.atacar()

  const heroiC = new heroi('Jackie Chan', 90, 'ninja')
  heroiC.atacar()
  