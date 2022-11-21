

export const gri  = async () => {

    const url = `http://localhost:8080/vistas/provincia/listaprovincia/1?itemsNumber=22`;

    const resp = await fetch(url);

    return resp;

     }

gri();