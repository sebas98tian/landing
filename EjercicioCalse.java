import java.util.LinkedList;
public class  EjercicioCalse{
    public static void main(String[] args) {
        LinkedList<Integer>lista=new LinkedList<>();
        lista.addFirst(2);
        lista.addFirst(22);
        lista.addFirst(212);
        lista.addFirst(20);
        lista.addFirst(4);
        System.out.println("Elementos de la lista "+lista);
        try{
            int f=lista.remove(298);
        }catch(IndexOutOfBoundsException e){
            System.out.println(e);
        }
        System.out.println("Elementos de la lista "+lista);
        // System.out.println(f);IndexOutOfBoundsException

    }
}