<<<<<<< HEAD
// export default function addFollower(state=[], action) {
//   // L'objet action, contient obligatoirement un type. celui-ci nous permet de définir le type d'action.
//   if (action.type == 'follow') {
//     // Ici, nous récupérons le state.followings précédent pour le sauvegarder dans followings.
//     var followings = [...state];
//     console.log(followings);
//     // Et nous y ajoutons ensuite, le nouveau following sur lequel nous venons de cliquer
//     followings.push({name: action.name, comp: action.comp, id: action.id);
//       return followings
//   } else {
//     // Par défaut, si aucun type d'action n'est défini, followings est un tableau vide.
//     return state
//   }
// }
=======
export default function addFollower(state=[], action) {
  // L'objet action, contient obligatoirement un type. celui-ci nous permet de définir le type d'action.
  if (action.type == 'follow') {
    // Ici, nous récupérons le state.followings précédent pour le sauvegarder dans followings.
    var followings = [...state];
    console.log(followings);
    // Et nous y ajoutons ensuite, le nouveau following sur lequel nous venons de cliquer
    followings.push({name: action.name, comp: action.comp, id: action.id});
      return followings
  } else {
    // Par défaut, si aucun type d'action n'est défini, followings est un tableau vide.
    return state
  }
}
>>>>>>> a868a6ff1f827c964ca83b1c47c2df4760d13ffe
