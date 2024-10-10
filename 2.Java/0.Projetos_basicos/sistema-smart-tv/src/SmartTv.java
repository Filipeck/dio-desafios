public class SmartTv {
    boolean ligada = false;
    int canal = 1;
    int volume = 15;

    public void ligar(){
        ligada = true;
    }

    public void desligar(){
        ligada = false;
    }

    public void aumentarVolume(){
        volume++;
        System.out.println("Aumentando volume para: " + volume);
    }

    public void diminuirVolume(){
        volume--;
        System.out.println("Diminuindo volume para: " + volume);

    }

    public void avançarCanal(){
        canal++;
        System.out.println("Canal: " + canal);

    }

    public void retornarCanal(){
        canal--;
        System.out.println("Canal: " + canal);

    }

    public void mudarCanal(int novoCanal){
        canal = novoCanal;
        System.out.println("Canal: " + canal);
    }
}
