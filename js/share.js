const url = 'http://localhost:8080/';

function setShare(){
  let resultImg = document.querySelector('#resultImg');
  let resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '덕비티아이 결과'
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page.result-' + resultAlt + '.html';

  // Kakao.Link.sendDefault({
  //   objectType: 'feed',
  //   content: {
  //     title: shareTitle,
  //     description: shareDes,
  //     imageUrl: shareImage,
  //     link: {
  //       mobileWebUrl: shareURL,
  //       webUrl: shareURL
  //     },
  //   },
  //   buttons: [
  //     {
  //       title: '결과확인하기',
  //       link: {
  //         mobileWebUrl: shareURL,
  //         webUrl: shareURL
  //       },
  //     },
  //   ]
  // });

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '덕BTI 결과',
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },
    itemContent: {
      profileText: 'Kakao',
      profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageText: 'Cheese cake',
      titleImageCategory: 'Cake',
      items: [
        {
          item: 'Cake1',
          itemOp: '1000원',
        },
        {
          item: 'Cake2',
          itemOp: '2000원',
        },
        {
          item: 'Cake3',
          itemOp: '3000원',
        },
        {
          item: 'Cake4',
          itemOp: '4000원',
        },
        {
          item: 'Cake5',
          itemOp: '5000원',
        },
      ],
      sum: '총 결제금액',
      sumOp: '15000원',
    },
    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      }
    ]
  });
}
