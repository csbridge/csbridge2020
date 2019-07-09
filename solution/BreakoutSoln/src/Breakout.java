/*
 * File: Breakout.java
 * -------------------
 * Name:
 * Section Leader:
 * 
 * This file will eventually implement the game of Breakout.
 */

import graphics.EsGraphics;
import java.awt.Color;
import java.awt.event.MouseEvent;
import graphics.*;

public class Breakout extends EsGraphics {

	/* variables */	
	private double vx, vy;
	private int contadorLadrillos = 100;

	//adding an individual ball object
	private SOvalo pelota;

	//adding individual paddle object
	private SRect pala;

	public void run() {

		iniciarJuego();
		for(int i=0; i < NTURNOS; i++) {

			dibujarPelota();
			hacerJuego();
			if(contadorLadrillos == 0) {
				break;
			}
		}
		mostrarFin();
	}

	private void mostrarFin() {
		quitarTodo();
		pelota.cambiarVisible(false);
		if(contadorLadrillos > 0) {
			imprimirPerdida();
		} else {
			imprimirGana();
		}
	}

	private void iniciarJuego() {
		dibujarLadrillos();
		dibujarPala();
	}

	private void dibujarLadrillos() {	
		double cx = darAncho() / 2;
		double cy = LADRILLO_Y_OFFSET;
		for(int fila = 0; fila < NFILAS; fila++ ) {
			for(int columna = 0; columna < NLADRILLOS_POR_FILA; columna++) {
				double x = cx - (NLADRILLOS_POR_FILA*LADRILLO_ANCHO)/2 - ((NLADRILLOS_POR_FILA-1)*LADRILLO_SEP)/2 + columna*LADRILLO_ANCHO + columna*LADRILLO_SEP;
				double y = cy + fila * LADRILLO_ALTURA + fila*LADRILLO_SEP;
				SRect ladrillo = new SRect(x, y, LADRILLO_ANCHO, LADRILLO_ALTURA);
				ladrillo.cambiarRelleno(true);
				ladrillo.cambiarColor(darLadrilloColor(fila));
				agregar(ladrillo);
			}
		}
	}

	private Color darLadrilloColor(int fila) {
		if (fila < 2) {
			return Color.RED;
		}
		if (fila == 2 || fila == 3) {
			return Color.ORANGE;
		}
		if (fila == 4 || fila == 5) {
			return Color.YELLOW;
		}
		if (fila == 6 || fila == 7) {
			return Color.GREEN;
		}
		if (fila == 8 || fila == 9) {
			return Color.CYAN;
		}
		return Color.BLACK;
	}

	//paddle set-up
	private void dibujarPala() {
		double x = darAncho()/2 - PALETA_ANCHO/2; 
		double y = darAlto() - PALETA_Y_OFFSET - PALETA_ALTURA;
		pala = new SRect (x, y, PALETA_ANCHO, PALETA_ALTURA);
		pala.cambiarRelleno(true);
		agregar(pala);
		agregarMouseListeners();
	}

	//making the mouse track the paddle
	public void mouseMovido(MouseEvent e) {
		if ((e.getX() < darAncho() - PALETA_ANCHO/2) && (e.getX() > PALETA_ANCHO/2)) {
			double newX = e.getX() - PALETA_ANCHO/2;
			double newY = darAlto() - PALETA_Y_OFFSET - PALETA_ALTURA;
			pala.cambiarUbicacion(newX, newY);
		}
	}

	//ball set-up
	private void dibujarPelota() {
		double x = darAncho()/2 - PELOTA_RADIO;
		double y = darAlto()/2 - PELOTA_RADIO;
		pelota = new SOvalo(x, y, PELOTA_RADIO, PELOTA_RADIO);
		pelota.cambiarRelleno(true);
		agregar(pelota);
	}

	private void hacerJuego() {
		esperarClic();
		darPelotaVelocidad();
		while (true) {
			moverPelota();
			if (pelota.darY() >= darAlto()) {
				break;
			}
			if(contadorLadrillos == 0) {
				break;
			}
		}
	}

	private void darPelotaVelocidad() {
		vy = 4.0;
		vx = doubleAleatorio(1.0, 3.0);
		if (booleanAleatorio(0.5)) {
			vx = -vx; 
		}

	}

	private void moverPelota() {
		pelota.moverse(vx, vy);
		//check for walls
		//need to get vx and vy at the point closest to 0 or the other edge
		if ((pelota.darX() - vx <= 0 && vx < 0 )|| (pelota.darX() + vx >= (darAncho() - PELOTA_RADIO*2) && vx>0)) {
			vx = -vx;
		}
		//We don't need to check for the bottom wall, since the ball can fall through the wall at that point
		if ((pelota.darY() - vy <= 0 && vy < 0 )) {
			vy = -vy;
		}

		//check for other objects
		SObjeto objetoChocando = darObjetoChocando();
		if (objetoChocando == pala) {
			vy = -Math.abs(vy);
		}
		else if (objetoChocando != null) {
			quitar(objetoChocando); 
			contadorLadrillos--;
			vy = -vy;
		}
		pausa (RETRASO);
	}


	private SObjeto darObjetoChocando() {

		if((darObjetoA(pelota.darX(), pelota.darY())) != null) {
			return darObjetoA(pelota.darX(), pelota.darY());
		}
		else if (darObjetoA( (pelota.darX() + PELOTA_RADIO*2), pelota.darY()) != null ){
			return darObjetoA(pelota.darX() + PELOTA_RADIO*2, pelota.darY());
		}
		else if(darObjetoA(pelota.darX(), (pelota.darY() + PELOTA_RADIO*2)) != null ){
			return darObjetoA(pelota.darX(), pelota.darY() + PELOTA_RADIO*2);
		}
		else if(darObjetoA((pelota.darX() + PELOTA_RADIO*2), (pelota.darY() + PELOTA_RADIO*2)) != null ){
			return darObjetoA(pelota.darX() + PELOTA_RADIO*2, pelota.darY() + PELOTA_RADIO*2);
		}
		//need to return null if there are no objects present
		else{
			return null;
		}

	}

	private void imprimirPerdida() {
		SLabel finPartido = new SLabel ("GAME OVER", darAncho()/2, darAlto()/2);

		finPartido.setFont("Courier-24");
		finPartido.moverse(-finPartido.darAncho()/2, -finPartido.darAlto());
		finPartido.cambiarColor(Color.BLUE);
		add (finPartido);
	}


	private void imprimirGana() {
		SLabel ganador = new SLabel ("Ganador!!", darAncho()/2, darAlto()/2);
		ganador.moverse(-ganador.darAncho()/2, -ganador.darAlto());
		ganador.cambiarColor(Color.RED);
		add (ganador);
	}

	/** Width and height of application window in pixels */
	public static final int APPLICATION_WIDTH = 400;
	public static final int APPLICATION_HEIGHT = 600;

	/** Constantes para la paleta */
	private static final int PALETA_ANCHO = 60;
	private static final int PALETA_ALTURA = 10;
	private static final int PALETA_Y_OFFSET = 30;

	/** Constantes para las filas */
	private static final int NLADRILLOS_POR_FILA = 10;
	private static final int NFILAS = 10;

	/** Constantes para las ladrillos */
	private static final int LADRILLO_SEP = 4;
	private static final int LADRILLO_ANCHO =
			(APPLICATION_WIDTH - (NLADRILLOS_POR_FILA - 1) * LADRILLO_SEP) / NLADRILLOS_POR_FILA;
	private static final int LADRILLO_ALTURA = 8;
	private static final int LADRILLO_Y_OFFSET = 70;
	
	/** Constantes para la pelota */
	private static final int PELOTA_RADIO = 10;

	/** Numero de turnos */
	private static final int NTURNOS = 3;
	
	/** Retraso de la animación o tiempo de pausa entre movimientos de la pelota. */	
	private static final int RETRASO = 10;
	
	
}