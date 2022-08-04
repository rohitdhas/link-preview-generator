export function getDomain(url) {
  if (!validateURL(url)) return url;

  const urlData = new URL(url);
  return urlData.hostname;
}

export function selectImageURL(favicons, images) {
  if (!favicons.length && images.length) {
    return "https://www.carnival.com/_ui/responsive/ccl/assets/images/notfound_placeholder.svg";
  } else if (images.length) {
    return images[0];
  } else {
    return favicons[0];
  }
}

export function validateURL(url) {
  const pattern =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  return pattern.test(url);
}

export function modifyDescription(description) {
  if (!description) return "No description found!";

  const arr = description.split(" ");
  if (!arr.length) return "No description found!";
  return `${arr.slice(0, 20).join(" ")}...`;
}
