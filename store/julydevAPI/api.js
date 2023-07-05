import axios from "axios"
const julydevAPI = axios.create({
  baseURL: "https://july05-dev-97559.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return julydevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return julydevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_mithilrs_list(payload) {
  return julydevAPI.get(`/api/v1/mithilrs/`)
}
function api_v1_mithilrs_create(payload) {
  return julydevAPI.post(`/api/v1/mithilrs/`, payload.data)
}
function api_v1_mithilrs_retrieve(payload) {
  return julydevAPI.get(`/api/v1/mithilrs/${payload.id}/`)
}
function api_v1_mithilrs_update(payload) {
  return julydevAPI.put(`/api/v1/mithilrs/${payload.id}/`, payload.data)
}
function api_v1_mithilrs_partial_update(payload) {
  return julydevAPI.patch(`/api/v1/mithilrs/${payload.id}/`, payload.data)
}
function api_v1_mithilrs_destroy(payload) {
  return julydevAPI.delete(`/api/v1/mithilrs/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return julydevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return julydevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return julydevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return julydevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return julydevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return julydevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return julydevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return julydevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return julydevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return julydevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return julydevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return julydevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_mithilrs_list,
  api_v1_mithilrs_create,
  api_v1_mithilrs_retrieve,
  api_v1_mithilrs_update,
  api_v1_mithilrs_partial_update,
  api_v1_mithilrs_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
