function saveAuthToCookie(value) {
  document.cookie = `til_auth=${value}`;
}

function saveEmailToCookie(email) {
  document.cookie = `til_user_email=${email}`;
}

function saveIDToCookie(id) {
  document.cookie = `til_user_id=${id}`;
}

function getEmailFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user_email\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function getIDFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user_id\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveEmailToCookie,
  saveIDToCookie,
  getAuthFromCookie,
  getEmailFromCookie,
  getIDFromCookie,
  deleteCookie,
};
