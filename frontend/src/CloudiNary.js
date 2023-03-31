export let postDetails = (pics) => {
  if (pics === undefined) {
    alert("Please Select an Image!");
    return;
  }
  // console.log(pics);
  if (pics.type === "image/jpeg" || pics.type === "image/png") {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "chat-easy");
    data.append("cloud_name", "abhishekamber");
    fetch("https://api.cloudinary.com/v1_1/abhishekamber/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url.toString());

        return data.url.toString();
        // console.log();
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  } else {
    alert("Please Select an Image!");
    return null;
  }
};
