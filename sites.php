<?php
	
	switch($section)
	{
		case "howtoplay":
			include("howtoplay.php");
			break;
                    
        case "aboutus":
            include("aboutus.php");
            break;
			
		case "platzhalter1":
			include("Platzhalter1/platzhalter1.php");
			break;
                   
        case "platzhalter1/a":
            include("Platzhalter1/a.php");
            break;
			
		case "platzhalter2":
			include("Platzhalter2/platzhalter2.php");
			break;			
			
        case "platzhalter2/a":
            include("Platzhalter2/a.php");
            break;
			
		case "platzhalter3":
			include("Platzhalter3/platzhalter3.php");
			break;			
					
        case "platzhalter3/a":
            include("Platzhalter3/a.php");
            break;

		default:
			include("game.php");
			break;
	}
?>