import React, { Component } from 'react';

class Pdf extends Component {
    
    componentDidMount() {
        if (typeof window.orientation !== "undefined") {
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    }

    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <iframe
                    title='Pdf de servicios de la consultora'
                    src="/docs/Servicios-WL.pdf"
                    type="application/pdf"
                    width="100%"
                    height="100%">
                    <br />
                    <a href="/docs/Servicios-WL.pdf" id="enlaceDescargarPdf" download="Servicios-WL.pdf">
                        Tu dispositivo no puede visualizar los PDF, haz clic aquí para descargarlo
                    </a>
                </iframe>
            </div>
        );
    }
}

export default Pdf;
