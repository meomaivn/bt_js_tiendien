/*** Tính tiền taxi
 * B1: nhập số km
 * b2 : xử lý:
 * var tientaxi=20000
 * var tongtien=0;
 *
 * so km >1 --> 20 000
 * tongtien= sokm*20000
 *
 *
 * */
var submitPower = document.getElementById("submitPower");
submitPower = document.onclick = function () {
  var nameChuHo = document.getElementById("nameChuHo").value;
  var kwTrongThang = document.getElementById("kwTrongThang").value * 1;

  let fare = 0;
  const firstOpeningPrice = 1678;
  const price50KConts = 1.734; //2
  const price100kwConts = 2014; //3
  const price100kwConts200 = 2536; //4
  const price100kwConts300 = 2919; //5
  const price100kwConts401 = 3015; //6
  var TAX = 10 / 100;
  var TienThue;
  //   if(kwTrongThang>0){
  //     alert("bạn nhập oki")
  //   }(kwTrongThang <= 0 && kwTrongThang <= 50) {
  //     fare =
  //       kwTrongThang * firstOpeningPrice * TAX + kwTrongThang * firstOpeningPrice;
  //     console.log("Giá tiền", fare);
  //   } else if (kwTrongThang >= 51 && kwTrongThang <= 100) {
  //     fare =
  //       50 * firstOpeningPrice +
  //       (kwTrongThang - 50) * 1533 +
  //       (50 * firstOpeningPrice + (kwTrongThang - 50) * 1533) * TAX;
  //     console.log("Giá tiền", fare);
  //   }
  //   } else if (kwTrongThang >= 101 && kwTrongThang <= 200) {
  //     fare =
  //       50 * firstOpeningPrice +
  //       50 * price50KConts +
  //       (kwTrongThang - 100) * price100kwConts * TAX +
  //       50 * firstOpeningPrice +
  //       50 * price50KConts +
  //       (kwTrongThang - 100) * price100kwConts;
  //     console.log("Giá tiền", fare);
  //   } else if (kwTrongThang >= 201 && kwTrongThang <= 300) {
  //     fare =
  //       50 * firstOpeningPrice +
  //       50 * price50KConts +
  //       100 * price100kwConts +
  //       (kwTrongThang - 200) * price100kwConts200 +
  //       (50 * firstOpeningPrice +
  //         50 * price50KConts +
  //         100 * price100kwConts +
  //         (kwTrongThang - 200) * price100kwConts200 * TAX);
  //     console.log("Giá tiền", fare);
  //   } else if (kwTrongThang >= 301 && kwTrongThang <= 400) {
  //     fare =
  //       50 * firstOpeningPrice +
  //       50 * price50KConts +
  //       100 * price100kwConts +
  //       (kwTrongThang - 300) * price100kwConts300 +
  //       (50 * firstOpeningPrice +
  //         50 * price50KConts +
  //         100 * price100kwConts +
  //         (kwTrongThang - 300) * price100kwConts300 * TAX);
  //     console.log("Giá tiền", fare);
  //   } else if (kwTrongThang >= 401) {
  //     fare =
  //       50 * firstOpeningPrice +
  //       50 * price50KConts +
  //       100 * price100kwConts +
  //       100 * price100kwConts300 +
  //       (kwTrongThang - 400) * price100kwConts401 +
  //       (50 * firstOpeningPrice +
  //         50 * price50KConts +
  //         100 * price100kwConts +
  //         100 * price100kwConts300 +
  //         (kwTrongThang - 400) * price100kwConts401 * TAX);
  //   }
  // }
  if (kwTrongThang <= 0) {
    alert("vui lòng nhập lại");
  } else if (kwTrongThang < 50) {
    TienThue = kwTrongThang * firstOpeningPrice * TAX;

    fare =
      kwTrongThang * firstOpeningPrice * TAX +
      kwTrongThang * firstOpeningPrice +
      TienThue;
    console.log("Giá tiền", fare);
  } else if (kwTrongThang >= 50 && kwTrongThang <= 100) {
    TienThue =
      50 * firstOpeningPrice +
      (kwTrongThang - 50) * 1533 +
      (50 * firstOpeningPrice + (kwTrongThang - 50) * 1533) * TAX;
    console.log("Tien Thue ", TienThue);
    fare =
      TienThue +
      50 * firstOpeningPrice +
      (kwTrongThang - 50) * 1533 +
      (50 * firstOpeningPrice + (kwTrongThang - 50) * 1533);
    console.log("Giá tiền", fare);
  } else if (kwTrongThang >= 101 && kwTrongThang <= 200) {
    TienThue =
      50 * firstOpeningPrice +
      50 * price50KConts +
      (kwTrongThang - 100) * price100kwConts * TAX;
    fare =
      TienThue +
      50 * firstOpeningPrice +
      50 * price50KConts +
      (kwTrongThang - 100) * price100kwConts;
    console.log("Giá tiền", fare);
  } else if (kwTrongThang >= 201 && kwTrongThang <= 300) {
    TienThue =
      50 * firstOpeningPrice +
      50 * price50KConts +
      100 * price100kwConts +
      (kwTrongThang - 200) * price100kwConts200 * TAX;
    fare =
      50 * firstOpeningPrice +
      50 * price50KConts +
      100 * price100kwConts +
      (kwTrongThang - 200) * price100kwConts200 +
      TienThue;
    console.log("Giá tiền", fare);
  } else if (kwTrongThang >= 301 && kwTrongThang <= 400) {
    TienThue =
      50 * firstOpeningPrice +
      50 * price50KConts +
      100 * price100kwConts +
      (kwTrongThang - 300) * price100kwConts300 * TAX;
    fare =
      50 * firstOpeningPrice +
      50 * price50KConts +
      100 * price100kwConts +
      (kwTrongThang - 300) * price100kwConts300 +
      TienThue;
    console.log("Giá tiền", fare);
  } else if (kwTrongThang >= 401) {
    TienThue =
      50 * firstOpeningPrice +
      50 * price50KConts +
      100 * price100kwConts +
      100 * price100kwConts300 +
      (kwTrongThang - 400) * price100kwConts401 * TAX;
    fare =
      50 * firstOpeningPrice +
      50 * price50KConts +
      100 * price100kwConts +
      100 * price100kwConts300 +
      (kwTrongThang - 400) * price100kwConts401 +
      TienThue;
  }

  // Convert VND
  const config = { style: "currency", currency: "VND" };
  const formated = new Intl.NumberFormat("vi-VN", config);

  var result = "";
  result += "<p>Tiền điện tháng này phải trả là:</p>";
  result += "<p>Thông tin khách hàng: " + nameChuHo + "</p>";
  result += "<p>Số KW bạn đã sử dụng là: " + kwTrongThang + "</p>";
  result +=
    "<p> Tổng tiền của bạn phải trả : " + formated.format(fare) + "</p>";
  result += "<p>Tiền thuế của bạn là: " + formated.format(TienThue) + " </p>";
  result += " <p> Thuế suất %: " + TAX + "</p>";

  var footerPower = document.getElementById("footerPower");
  footerPower.innerHTML = result;
};