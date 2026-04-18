function trackParcel() {
  const trackingID = document.getElementById("trackingID").value;
  const resultDiv = document.getElementById("statusResult");

  // ডেমো ডেটাবেস
  const data = {
    UC123: {
      status: "পণ্যটি বর্তমানে ডেলিভারির জন্য পথে আছে",
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    UC456: {
      status: "পার্সেলটি সফলভাবে ডেলিভার করা হয়েছে",
      color: "bg-green-100 text-green-700 border-green-200",
    },
    UC789: {
      status: "পেন্ডিং - হাবে পৌঁছানোর অপেক্ষায়",
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    },
  };

  if (trackingID === "") {
    alert("দয়া করে একটি ট্র্যাকিং আইডি দিন!");
    return;
  }

  resultDiv.classList.remove("hidden");

  if (data[trackingID]) {
    resultDiv.className = `mt-4 p-3 rounded-lg border ${data[trackingID].color}`;
    resultDiv.innerHTML = `<strong>Status:</strong> ${data[trackingID].status}`;
  } else {
    resultDiv.className =
      "mt-4 p-3 rounded-lg border bg-red-100 text-red-700 border-red-200";
    resultDiv.innerHTML = "দুঃখিত, এই আইডিতে কোনো পার্সেল পাওয়া যায়নি।";
  }
}
