<?php
class EcritureBDD extends Database
{
 protected $bdd;
private $email;
private $pseudo;
private $note;
private $commentaire;
private $image;

    public function __construct()
    {
        parent::__construct();

    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->email =  mb_strtolower($email);
    }

    /**
     * @param mixed $pseudo
     */
    public function setPseudo($pseudo)
    {
        $this->pseudo = $pseudo;
    }

    /**
     * @param mixed $note
     */
    public function setNote($note)
    {
        $this->note = $note;
    }

    /**
     * @param mixed $commentaire
     */
    public function setCommentaire($commentaire)
    {
        $this->commentaire = stripslashes(strip_tags($commentaire));
    }

 /**
     * @param mixed $image
     */
    public function setImage($image)
    {
        $this->image = $image;

    }


    function insert()
    {
        $today = date("yy-m-d");
        $email      =$this->email;
        $pseudo     =$this->pseudo;
        $note       =$this->note;
        $ddate      ='CURRENT_TIMESTAMP';
        $commentaire=$this->commentaire;
        $image      =$this->image;

        // attention ddate est pas une chaine de caractere
        $req = $this->bdd->prepare("INSERT INTO fizzup (email, pseudo, note,ddate, commentaire, image) 
        VALUES (
        '".$email."',
        '".$pseudo."',
        '".$note."',
        '".$today."',
        '".$commentaire."',
        '".$image."'
        )
        ");

        $req->execute(array(
            'email' => $email,
            'pseudo' => $pseudo,
           'note' => $note,
            'ddate' => $today,
            'commentaire'=> $commentaire,
            'image'=> $image
        ));

    }
    //INSERT INTO `fizzup`(`id`, `email`, `pseudo`, `note`, `ddate`, `commentaire`) VALUES( '','popo@gmail.com','popol','1',CURRENT_TIMESTAMP,'tou va bien')
}