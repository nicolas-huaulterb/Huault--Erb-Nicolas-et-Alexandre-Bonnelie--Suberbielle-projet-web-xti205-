<?php
$nom = $_POST['nom'] ?? '';
$prenom = $_POST['prenom'] ?? '';
$telephone = $_POST['telephone'] ?? '';
?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../CSS/inscription.css">
    <title>Inscription</title>
</head>
<body>

<div class="formulaire">

    <h2>Formulaire d'inscription</h2>

    <form method="post">
        <label>Nom :</label><br>
        <input type="text" name="nom" required><br><br>

        <label>Prénom :</label><br>
        <input type="text" name="prenom"><br><br>

        <label>Téléphone :</label><br>
        <input type="text" name="telephone"><br><br>

        <button type="submit">Envoyer</button>

    </form>


    <button><a href="./accueil.html" class="btn-retour">Retour</a></button>

    <?php

    if ($nom || $prenom || $telephone) {
        echo "<h3>Données reçues :</h3>";
        echo "Nom : $nom<br>";
        echo "Prénom : $prenom<br>";
        echo "Téléphone : $telephone<br>";
    }
    ?>

    <script src="../js/inscription.js"></script>

</div>



</body>
</html>