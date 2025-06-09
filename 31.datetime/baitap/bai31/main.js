function timeSince(timestamp) {
  let now = new Date();
  console.log("Current time:", now.getTime());
  let timeDifference = now.getTime() - timestamp;
  let seconds = Math.floor(timeDifference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12); // 1. 00000000000001 ~ 1

  if (years > 0) {
    return `Online ${years} năm trước`;
  } else if (months > 0) {
    return `Online ${months} tháng trước`;
  } else if (days > 0) {
    return `Online ${days} ngày trước`;
  } else if (hours > 0) {
    return `Online ${hours} giờ trước`;
  } else if (minutes > 0) {
    return `Online ${minutes} phút trước`;
  } else if (seconds > 0) {
    return `Online ${seconds} giây trước`;
  }
}

// Ví dụ sử dụng
let timestamp = new Date("2023-10-01T12:00:00Z").getTime(); // Thay đổi ngày giờ theo ý muốn
console.log(timeSince(timestamp)); // Kết quả sẽ là "Online X ngày trước" hoặc tương tự
