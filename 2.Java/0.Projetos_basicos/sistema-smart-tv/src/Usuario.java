public class Usuario {
    public static void main(String[] args) throws Exception {
        
        SmartTv smartTv = new SmartTv();

        System.out.println("Tv Ligada: " + smartTv.ligada);
        System.out.println("Canal atual: " + smartTv.canal);
        System.out.println("Volume atual: " + smartTv.volume);

        // ligando a tv
        smartTv.ligar();
        System.out.println("Tv Ligada: " + smartTv.ligada);

        // interagindo com o volume
        smartTv.aumentarVolume();
        smartTv.aumentarVolume();
        smartTv.aumentarVolume();
        smartTv.diminuirVolume();

        // interagindo com o canal
        smartTv.avançarCanal();
        smartTv.avançarCanal();
        smartTv.avançarCanal();
        smartTv.avançarCanal();
        // selecionando canal específico
        smartTv.mudarCanal(11);

        // desligando a tv
        smartTv.desligar();
        System.out.println("Tv Ligada: " + smartTv.ligada);
    }
}
