
const jwt = require('jsonwebtoken');
const { SECRET_JWT } = require('../core/config');
const { buildAPIResponse } = require('../core/helpers-library');

module.exports = {

    auth: async (loginRequest) => {

        // Trouver en base l'user 
        const loggedUser = { email: loginRequest.email, password: loginRequest.password };

        // Si pas trouvé
        if (!loggedUser) {
            
            return buildAPIResponse("869", "Couple email/password incorrect", null);
        }

        const token = jwt.sign({ email: loggedUser.email }, SECRET_JWT, { expiresIn: '2 hours' });

        return buildAPIResponse("202", "Authentifié(e) avec succès", token);
    }

}