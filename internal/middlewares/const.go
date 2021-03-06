package middlewares

const jwtIssuer = "Authelia"

const xForwardedProtoHeader = "X-Forwarded-Proto"
const xForwardedMethodHeader = "X-Forwarded-Method"
const xForwardedHostHeader = "X-Forwarded-Host"
const xForwardedURIHeader = "X-Forwarded-URI"

const xOriginalURLHeader = "X-Original-URL"

const applicationJSONContentType = "application/json"

var okMessageBytes = []byte("{\"status\":\"OK\"}")

const operationFailedMessage = "Operation failed"
const identityVerificationTokenAlreadyUsedMessage = "The identity verification token has already been used"
const identityVerificationTokenHasExpiredMessage = "The identity verification token has expired"
