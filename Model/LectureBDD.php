<?php

class LectureBDD extends Database
{
    protected $bdd;
    private $table;
    private $email;
    private $pseudo;
    private $note;
    private $date;
    private $commentaire;
    private $bydate;

    /**
     * LectureBDD constructor.
     */
    public function __construct()
    {
        parent::__construct();

    }

    function justeNote($justeNote)
    {


        $req = $this->bdd->prepare("     SELECT * FROM
fizzup WHERE note LIKE '" . $justeNote . "'");
        $req->execute();

        return $req;
    }

    function byDate($bydate, $bydate2)
    {
        $bydate = (empty($bydate)) ? date('y-m-d') : $bydate;//ajoute une date du jour si le user ne met qu une date
        $bydate2 = (empty($bydate2)) ? date('y-m-d') : $bydate2;//idem
        $req = $this->bdd->prepare("SELECT *, DATE_FORMAT(ddate,'%d/%m/%Y') as ddate FROM
        fizzup WHERE ddate  >= '$bydate' AND ddate <= '$bydate2'
");
        $req->execute();

        return $req;
    }

    function byNote($note)
    {

        /*ASC ou DESC*/
        $req = $this->bdd->prepare("SELECT *, DATE_FORMAT(ddate,'%d/%m/%Y') as ddate FROM
        fizzup  ORDER BY note $note ");
        $req->execute();

        return $req;
    }

    function lect()
    {
        $req = $this->bdd->prepare("SELECT *, DATE_FORMAT(ddate,'%d/%m/%Y') as ddate FROM fizzup WHERE 1");
        $req->execute();

        return $req;
    }
}

