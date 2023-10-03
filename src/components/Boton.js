import '../stylesheet/Boton.css'

export function Boton(props) {

    const esOperador = (operador) => {
        return operador === '+' || operador === '-' || operador === '/' || operador === '*';
    };

    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
}