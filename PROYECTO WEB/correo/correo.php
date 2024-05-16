<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Correo</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h2>formulario</h2>
        <form action="correo.php" method="post">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre"><br>
            <label for="email">Email</label>
            <input type="email" id="email" name="email"><br>
            <label for="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea><br>
            <input type="submit" value="enviar" name="enviar">
        </form>

        <?php
            if(isset($_POST["enviar"])){
                $nombre=$_POST["nombre"];
                $email=$_POST["email"];
                $mensaje=$_POST["mensaje"];

                $destinatario="179169@upslp.edu.mx";
                $asunto="Nuevo mensaje de $email";

                $contenido="Nombre: $nombre \n";
                $contenido.="Email: $email \n";
                $contenido.="Mensaje: $mensaje\n";

                $header="From: 179169@soft.com";

                $mail=mail($destinatario,$asunto,$contenido,$header);

                if($mail){
                    echo "<script>alert('Correo enviado correctamente');</script>";
                }else{
                    echo "<script>alert('Correo no enviado');</script>";
                }
            }
        ?>
    </body>
</html>