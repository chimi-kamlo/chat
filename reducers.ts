import {ActionType} from "./types";

// État initial de l'application
const initialState: State = {
  messages: [],
};

// Réducteur pour mettre à jour l'état de l'application
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Action
    Type.ADD_MESSAGE:
      // Ajoute le nouveau message à la liste existante
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      // Pour toutes les autres actions, retourne l'état inchangé
      return state;
  }
};

export default reducer;