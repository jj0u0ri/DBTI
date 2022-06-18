const url =

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '덕비티아이 결과'
  const shareDes = infoList[resultAllt].name;
  const shareImage
  const shareURL

}

function kakaoShare(){
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '오늘의 디저트',
      description: '아메리카노, 빵, 케익',
      imageUrl:
        'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecutionParams: 'test',
      },
    },

    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
        },
      },
    ]
  });
  }
