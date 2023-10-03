import '../stylesheet/BotonClear.css';

export const BotonClear = (props) => (
    <div className='boton-clear' onClick={() => props.manejarClick(props.children)}>
        {props.children}
    </div>
);