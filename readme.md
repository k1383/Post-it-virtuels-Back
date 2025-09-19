# Notes Rapides (Post-it virtuels)
Concept : Une application pour créer des notes textuelles simples.
Données : Note (id, contenu, couleur).
Opérations CRUD :
`CREATE` : Créer une nouvelle note.
`READ`   : Afficher toutes les notes sur un "mur" virtuel.
`UPDATE` : Modifier le texte ou la couleur d'une note.
`DELETE` : Supprimer une note.

## Les endpoints
POST    /postIt     -- Créer une nouvelle note 
GET     /posIt      -- Afficher toutes les notes
GET     /postIt/:id  -- Afficher une note en particulier 
PATCH   /postIt:id  -- Modifier une note (contenu, couleur)
DELETE  /postIt:id  -- Supprimer une note 

## Schema de données 

- Title : Titre de la note (string and required)
- Text : Contenu de la note (string and required)
- Color : Ajouter une couleur au texte ou titre (couleur noir par default (pas obligatoire))
- creationDate : Quand l'élément de liste à été créer (Date, require)
- completeDate : Quand l'élément à été marqué comme validé (Data)