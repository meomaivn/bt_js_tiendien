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
function calcElecBill() {
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
    if (Number.isNaN(kwTrongThang)) {
      alert("Bạn đã nhập sai , vui lòng nhập số");
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
}

/**Điểm chuẩn trường
 * B1: nhập điểm chuẩn trường
 * nhập điểm môn 1, môn 2, môn 3;
 * nhập đối tượng, nhập điểm ưu tiên
 * b2: Xử lý:
 * diểm 3 môn > = điểm chuẩn && điểm môn 1, môn 2 môn 3 !=0 bạn rớt chắc
 *
 *
 *
 * */



function calcMark() {
  var submitMark = document.getElementById("submitMark");
  submitMark = document.onclick = function () {
    var markSchool = parseFloat(document.getElementById("markSchool").value);
    var markOne = parseFloat(document.getElementById("markOne").value);
    var markTwo = parseFloat(document.getElementById("markTwo").value);
    var markThree = parseFloat(document.getElementById("markThree").value);
    var selDoiTuong = document.getElementById("selDoiTuong");
    console.log(markSchool, markOne, markTwo, markThree, selDoiTuong);
    var diemSubMark = markOne + markTwo + markThree;
    var diemSubMark;
    console.log(diemSubMark);
  };
}
if ((markSchool>0)&& markOne>0&& markTwo>0 && markThree)) {
  alert(" Vui lòng nhập số");
  // var info = "bạn vui lòng nhập số";
  // console.log(info);
}

function calcTAX() {
  var submitTAX = document.getElementById("submitTAX");
  submitTAX.onclick = function () {
    var nameCustom = document.getElementById("nameCustom").value;
    var total12Months = document.getElementById("total12Months").value * 1;
    var namePhuThuoc = document.getElementById("namePhuThuoc").value * 1;
    var tienPhuthuoc = 4e6;
    var tax60 = 5 / 100;
    var tax60To120 = 10 / 100;
    var tax120To210 = 15 / 100; //90;
    var tax210T0384 = 20 / 100; //174
    var tax384To624 = 25 / 100; //240
    var tax624To960 = 30 / 100; //336
    var taxUpper960 = 35 / 100;
    var chiuThue60 = 60000000;
    var chiuThue120 = 120000000;
    var chiuThue210 = 210000000;
    var chiuThue384 = 384000000;
    var chiuThue624 = 624000000;
    var chiuThue960 = 960000000;
    namePhuThuoc *= 1.6e6;
    giamGiaCanh = tienPhuthuoc + namePhuThuoc;
    console.log("Gia cảnh", giamGiaCanh);

    console.log("so tien", namePhuThuoc);
    let taxChiuThue = 0;
    let ketqua = "";
    console.log(nameCustom, namePhuThuoc, total12Months);
    if (isNaN(total12Months) || isNaN(namePhuThuoc)) {
      ketqua = "Vui lòng nhập số";
    } else {
      ketqua = "Bạn đã nhập số";
    }
    if (ketqua == "Bạn đã nhập số") {
      if (total12Months <= chiuThue60) {
        taxChiuThue = (total12Months - giamGiaCanh) * tax60;
        alert("tax chịu thuế là: " + taxChiuThue);
      } else if (total12Months > chiuThue60 && total12Months <= chiuThue120) {
        taxChiuThue =
          (total12Months - giamGiaCanh) * chiuThue60 * tax60 +
          (total12Months - chiuThue60) * tax60To120;
      } else if (total12Months > chiuThue120 && total12Months <= chiuThue384) {
        taxChiuThue =
          (total12Months - giamGiaCanh) * chiuThue60 * tax60 +
          chiuThue60 * tax60To120 +
          (total12Months - chiuThue120) * tax120To210;
        alert("tax chịu thuế là: " + taxChiuThue);
        console.log("Tax chịu thuế " + taxChiuThue);
      } else if (total12Months > chiuThue384 && total12Months <= chiuThue624) {
        taxChiuThue =
          (total12Months - giamGiaCanh) * chiuThue60 * tax60 +
          chiuThue60 * tax60To120 +
          (total12Months - chiuThue384) * tax384To624;
      } else if (total12Months > 624 && total12Months <= chiuThue960) {
        taxChiuThue =
          (total12Months - giamGiaCanh) * chiuThue60 * tax60 +
          chiuThue60 * tax60To120 +
          (total12Months - chiuThue384) * tax384To624 +
          (total12Months - chiuThue960) * tax624To960;
        console.log("Chịu thuế: " + taxChiuThue);
      } else
        taxChiuThue =
          (total12Months - giamGiaCanh) * chiuThue60 * tax60 +
          chiuThue60 * tax60To120 +
          chiuThue384 * tax384To624 +
          chiuThue960 * taxUpper960;
    }

    const config = { style: "currency", currency: "VND" };
    const formated = new Intl.NumberFormat("vi-VN", config);
    var result = "";

    result += "<p>Tien thue cua ban</p>";
    result +=
      "<p>Tien thu nhap mot nam la:" + formated.format(total12Months) + "</p>";
    result += "<p>Số người phụ thuộc:" + formated.format(namePhuThuoc) + "</p>";
    result += "<p>tiền phụ thuộc :" + formated.format(giamGiaCanh) + "</p>";
    result +=
      "<p>Tiền thuế bạn đóng là:" + formated.format(taxChiuThue) + "</p>";
    var footerTAX = document.getElementById("footerTAX");
    footerTAX.innerHTML = result;
  };
}
// function calcTAX() {
//   var submitTAX = document.getElementById("submitTAX");
//   submitTAX.onclick = function () {
//     var nameCustom = document.getElementById("nameCustom").value;
//     var total12Months = document.getElementById("total12Months").value * 1;
//     var namePhuThuoc = document.getElementById("namePhuThuoc").value * 1;
//     var tienPhuthuoc = 4e6;
//     var tax60 = 5 / 100;
//     var tax60To120 = 10 / 100;
//     var tax120To210 = 15 / 100; //90;
//     var tax210T0384 = 20 / 100; //174
//     var tax384To624 = 25 / 100; //240
//     var tax624To960 = 30 / 100; //336
//     var taxUpper960 = 35 / 100;
//     namePhuThuoc *= 1.6e6;
//     giamGiaCanh = tienPhuthuoc + namePhuThuoc;
//     console.log("Gia cảnh", giamGiaCanh);

//     console.log("so tien", namePhuThuoc);
//     let taxChiuThue = 0;
//     let ketqua = "";
//     console.log(nameCustom, namePhuThuoc, total12Months);
//     if (isNaN(total12Months) || isNaN(namePhuThuoc)) {
//       ketqua = "Vui lòng nhập số";
//     } else {
//       ketqua = "Bạn đã nhập số";
//     }
//   };
//   if (ketqua == "Bạn đã nhập số") {
//     if (total12Months <= 60000000) {
//       taxChiuThue = (total12Months - giamGiaCanh) * tax60;
//       console.log("tax chịu thuế là: ", taxChiuThue);
//     }
//   }
// }
