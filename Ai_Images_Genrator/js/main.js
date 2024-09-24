const api = "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";
const theText = document.getElementById("theEnterText");
const imge = document.createElement("img");
const imgOut = document.getElementById("imgOut");
const loader = document.getElementById("loader");

const getImage = async () => {
  // request to the openai api
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      style: "vivid",
      prompt: theText.value,
      n: 1,
      size: "1792x1024",
    }),
  };
    
    imge.removeAttribute("class");
    imge.removeAttribute("src")
  
  loader.className = "loader";

  const req = await fetch("https://api.openai.com/v1/images/generations",methods);
  console.log(req)
  
  imge.className = "image";
  theText.value = "";
  // res to jason
  const res = await req.json();
  loader.removeAttribute("class");
  let img = imgOut.appendChild(imge);
  console.log(res);
  theText.placeholder = "Done^-^";
  let imageUrl = res.data;
  imageUrl.map((photo) => {
    img.src = photo.url;
  });
};
