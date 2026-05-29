import { useEffect, useState } from "react";

export default function Home() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1920) {
        setScale(width / 1920);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col items-center">
      <div 
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: "1920px",
          height: `${39091 * scale}px`,
          transition: "transform 0.1s ease-out"
        }}
        className="relative"
      >
        <div data-layer="End Meta Pixel Code" data-node-id="merged-root" className="EndMetaPixelCode w-[1920px] h-[39091px] relative bg-white">
          <div data-layer="Header" data-node-id="320-1799" className="Header w-[1920px] h-[120px] left-0 top-0 absolute bg-[#fdfdfd] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)]">
              <div data-layer="Background" data-node-id="320-1800" className="Background w-[1920px] h-2 left-0 top-0 absolute bg-[#ff2678]" />
            </div>
          <div data-layer="Header" data-node-id="316-846" className="Header w-[1920px] h-[120px] left-0 top-0 absolute bg-[#fdfdfd] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)]">
              <div data-layer="Background" data-node-id="316-847" className="Background w-[1920px] h-2 left-0 top-0 absolute bg-[#ff2678]" />
              <img data-layer="Heading 1 → Link → ビオ整骨院" data-node-id="316-848" className="Heading1Link w-[378.83px] h-20 left-[560px] top-[24px] absolute" src="/assets/316-848.webp" />
              <div data-layer="Header" data-node-id="316-1213" className="Header w-[1920px] h-[120px] left-0 top-0 absolute bg-[#fdfdfd] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)]">
                <div data-layer="Background" data-node-id="316-1214" className="Background w-[1920px] h-2 left-0 top-0 absolute bg-[#ff2678]" />
                <div data-layer="Frame 4" data-node-id="316-1215" className="Frame4 w-[387px] h-20 left-[560px] top-[24px] absolute">
                  <img data-layer="Group 2 1" data-node-id="316-1216" className="Group21 w-[387px] h-20 left-0 top-0 absolute" src="/assets/316-1216.webp" />
                </div>
              </div>
            </div>
          <div data-layer="Main" data-node-id="316-7" className="Main w-[1920px] h-[21641px] left-0 top-[120px] absolute">
            <img data-layer="Figure → %E8%A5%BF%E6%98%A5%E9%A7%85%E3%81%8B%E3%82%89%E8%BB%8A3%E5%88%86-4.9.webp" data-node-id="316-8" className="FigureE8A5BfE698A5E9A785E3818bE38289E8Bb8a3E5888649Webp w-[768px] h-[642.84px] left-[576.00px] top-0 absolute" src="/assets/316-8.webp" />
            <img data-layer="Figure → BA-6.webp" data-node-id="316-9" className="FigureBa6Webp w-[768px] h-[768px] left-[576.00px] top-[642.84px] absolute" src="/assets/316-9.webp" />
            <div data-layer="※効果を保証するものではございません。" data-node-id="316-10" className="left-[1112.34px] top-[1450.84px] absolute text-right justify-center text-[#333333] text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※効果を保証するものではございません。</div>
            <img data-layer="Figure → %E3%81%8A%E6%82%A9%E3%81%BF01-2.webp" data-node-id="316-11" className="FigureE3818aE682A9E381Bf012Webp w-[767.98px] h-[766.08px] left-[576.00px] top-[2829.72px] absolute" src="/assets/316-11.webp" />
            <img data-layer="Figure → %E3%81%8A%E6%82%A9%E3%81%BF02-2.webp" data-node-id="316-12" className="FigureE3818aE682A9E381Bf022Webp w-[767.98px] h-[766.08px] left-[576.00px] top-[3595.80px] absolute" src="/assets/316-12.webp" />
            <img data-layer="Figure → %E3%81%8A%E6%82%A9%E3%81%BF03.webp" data-node-id="316-13" className="FigureE3818aE682A9E381Bf03Webp w-[767.98px] h-[766.08px] left-[576.00px] top-[4361.88px] absolute" src="/assets/316-13.webp" />
            <img data-layer="Figure → %E3%81%8A%E6%82%A9%E3%81%BF04.webp" data-node-id="316-14" className="FigureE3818aE682A9E381Bf04Webp w-[767.98px] h-[766.08px] left-[576.00px] top-[5127.95px] absolute" src="/assets/316-14.webp" />
            <img data-layer="Figure → offer-banner-3-1024x836.webp" data-node-id="316-15" className="FigureOfferBanner31024x836Webp w-[768px] h-[627px] left-[576.00px] top-[9000.55px] absolute" src="/assets/769x627CTA1.jpg" />
            <div data-layer="Border" data-node-id="316-19" className="Border w-[768px] h-[1105.69px] left-[3164.00px] top-[-2360px] absolute outline outline-1 outline-offset-[-1px] outline-[#ff2678]">
                <img data-layer="Figure → %E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97-575-1024x654.webp" data-node-id="316-20" className="FigureE382B0E383AbE383BcE383975751024x654Webp w-[718px] h-[458.56px] left-[25px] top-[25px] absolute" src="/assets/316-20.webp" />
                <div data-layer="通常10,000円" data-node-id="316-21" className="10000 left-[268.39px] top-[522.56px] absolute text-center justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">通常10,000円　</div>
                <div data-layer="Background" data-node-id="316-22" className="Background w-[90.03px] h-8 left-[409.56px] top-[517.56px] absolute bg-[#fe2577] rounded-[1px]">
                  <div data-layer="Strong → 90%OFF" data-node-id="316-23" className="Strong90Off left-[5px] top-[5px] absolute text-center justify-center text-white text-[19.10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">90%OFF</div>
                </div>
                <div data-layer="Background" data-node-id="316-24" className="Background w-[242.91px] h-8 left-[262.55px] top-[558.56px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                  <div data-layer="Strong → Mark → 初回限定980円(税込)" data-node-id="316-25" className="StrongMark980 left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-2xl font-light font-['Hiragino_Kaku_Gothic_ProN']">初回限定980円(税込)</div>
                </div>
                <div data-layer="Strong" data-node-id="316-26" className="Strong w-[273.08px] h-5 left-[25px] top-[969.50px] absolute">
                  <div data-layer="※初回キャンペーンは" data-node-id="316-27" className="left-0 top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">※初回キャンペーンは</div>
                  <div data-layer="Background" data-node-id="316-28" className="Background w-[127.14px] h-5 left-[145.94px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="各店舗毎月6名限定" data-node-id="316-29" className="6 left-[2px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">各店舗毎月6名限定</div>
                  </div>
                </div>
                <div data-layer="Strong" data-node-id="316-30" className="Strong w-[412.69px] h-5 left-[25px] top-[998.30px] absolute">
                  <div data-layer="※" data-node-id="316-31" className="left-0 top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">※</div>
                  <div data-layer="Background" data-node-id="316-32" className="Background w-[149.94px] h-5 left-[14.39px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="午前中は埋まりやすい" data-node-id="316-33" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">午前中は埋まりやすい</div>
                  </div>
                  <div data-layer="ので、早めのご連絡をお願いします。" data-node-id="316-34" className="left-[164.33px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">ので、早めのご連絡をお願いします。</div>
                </div>
                <div data-layer="Strong" data-node-id="316-35" className="Strong w-[500.06px] h-[48.80px] left-[25px] top-[1027.10px] absolute">
                  <div data-layer="※対応人数に限りがあるため、" data-node-id="316-36" className="left-0 top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">※対応人数に限りがあるため、</div>
                  <div data-layer="Background" data-node-id="316-37" className="Background w-[149.94px] h-5 left-[203.84px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="本気で痩せたい方のみ" data-node-id="316-38" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">本気で痩せたい方のみ</div>
                  </div>
                  <div data-layer="受け付けております。" data-node-id="316-39" className="left-[353.78px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">受け付けております。</div>
                  <div data-layer="※" data-node-id="316-40" className="left-0 top-[30.79px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">※</div>
                  <div data-layer="Background" data-node-id="316-41" className="Background w-[296.88px] h-5 left-[14.39px] top-[28.79px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="何をやっても痩せない方もお任せください。" data-node-id="316-42" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">何をやっても痩せない方もお任せください。</div>
                  </div>
                </div>
                <div data-layer="Border" data-node-id="316-43" className="Border w-[718px] h-[175.59px] left-[25px] top-[629.91px] absolute outline outline-1 outline-offset-[-1px] outline-[#ff2678]">
                  <div data-layer="Background" data-node-id="316-44" className="Background w-[122.63px] h-[25px] left-[237.69px] top-[26px] absolute bg-[#fe2577] rounded-[1px]">
                    <div data-layer="カウンセリング" data-node-id="316-45" className="left-[4px] top-[4px] absolute text-center justify-center text-white text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">カウンセリング</div>
                  </div>
                  <div data-layer="Background" data-node-id="316-46" className="Background w-[104px] h-[25px] left-[376.31px] top-[26px] absolute bg-[#fe2577] rounded-[1px]">
                    <div data-layer="痩身整体体験" data-node-id="316-47" className="left-[4px] top-[4px] absolute text-center justify-center text-white text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">痩身整体体験</div>
                  </div>
                  <div data-layer="Background" data-node-id="316-48" className="Background w-[121.88px] h-[25px] left-[229.50px] top-[70.79px] absolute bg-[#fe2577] rounded-[1px]">
                    <div data-layer="ダイエット指導" data-node-id="316-49" className="left-[4px] top-[4px] absolute text-center justify-center text-white text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエット指導</div>
                  </div>
                  <div data-layer="Background" data-node-id="316-50" className="Background w-[121.13px] h-[25px] left-[367.38px] top-[70.79px] absolute bg-[#fe2577] rounded-[1px]">
                    <div data-layer="個別プラン作成" data-node-id="316-51" className="left-[4px] top-[4px] absolute text-center justify-center text-white text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">個別プラン作成</div>
                  </div>
                  <div data-layer="Strong → 時間 約90分" data-node-id="316-52" className="Strong90 left-[305.09px] top-[121.59px] absolute text-center justify-center text-[#333333] text-[19.10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">時間 約90分</div>
                </div>
                <div data-layer="Background" data-node-id="316-53" className="Background w-[88.38px] h-[32.28px] left-[25px] top-[598.63px] absolute bg-[#ff2678]">
                  <div data-layer="Strong → 初回内容" data-node-id="316-54" className="Strong left-[10.19px] top-[6.39px] absolute text-center justify-center text-white text-[17px] font-light font-['Hiragino_Kaku_Gothic_ProN']">初回内容</div>
                </div>
                <a href="https://lin.ee/xXOxJqxk" target="_self" data-layer="Link" data-node-id="316-55" className="Link w-[574.39px] h-14 left-[96.80px] top-[821.50px] absolute bg-[#62d847] rounded-[80px] shadow-[0px_4px_0px_0px_rgba(74,162,53,1.00)] hover:scale-[1.02] transition-transform duration-150 cursor-pointer flex items-center justify-center">
                  <div data-layer="今すぐLINEで予約する" data-node-id="316-56" className="Line text-center text-white text-base font-bold font-['Noto_Sans_JP'] mr-2">今すぐLINEで予約する</div>
                  <img data-layer="SVG" data-node-id="316-57" className="Svg w-[19.36px] h-[19.36px] left-[372.87px] top-[18.31px] absolute overflow-hidden" src="/assets/316-57.svg" />
              </a>
                <a href="http://b.hpr.jp/kr/hp/H000813406" target="_self" data-layer="Link" data-node-id="316-62" className="Link w-[574.39px] h-14 left-[96.80px] top-[893.50px] absolute bg-[#e52b79] rounded-[80px] shadow-[0px_4px_0px_0px_rgba(172,32,91,1.00)] hover:scale-[1.02] transition-transform duration-150 cursor-pointer flex items-center justify-center">
                  <div data-layer="ホットペッパーで予約する" data-node-id="316-63" className="Line text-center text-white text-base font-bold font-['Noto_Sans_JP'] mr-2">ホットペッパーで予約する</div>
                  <img data-layer="SVG" data-node-id="316-64" className="Svg w-[19.36px] h-[19.36px] left-[387.39px] top-[18.31px] absolute overflow-hidden" src="/assets/316-64.svg" />
              </a>
              </div>
            <div data-layer="Background" data-node-id="316-69" className="Background w-[768px] h-[54.39px] left-[576.00px] top-[1501px] absolute bg-[#ff2678]">
                <div data-layer="Strong → 初回限定キャンペーン" data-node-id="316-70" className="Strong left-[254.53px] top-[13px] absolute text-center justify-center text-white text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">初回限定キャンペーン</div>
              </div>
            <div data-layer="Background" data-node-id="316-71" className="Background w-[1920px] h-[120px] left-[0.00px] top-[2709.72px] absolute bg-[#f7f6eb]">
                <div data-layer="Heading 3" data-node-id="316-72" className="Heading3 w-[1920px] h-14 left-0 top-[32px] absolute">
                  <div data-layer="Background" data-node-id="316-73" className="Background w-[145.41px] h-[26px] left-[713.02px] top-[1px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="北名古屋市近隣" data-node-id="316-74" className="left-[2px] top-[2px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">北名古屋市近隣</div>
                  </div>
                  <div data-layer="にお住まいの８キロ以上痩せたい方へ" data-node-id="316-75" className="left-[858.42px] top-[3px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">にお住まいの８キロ以上痩せたい方へ</div>
                  <div data-layer="このようなこと悩んでいませんか？" data-node-id="316-76" className="left-[795.11px] top-[31px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">このようなこと悩んでいませんか？</div>
                </div>
                <img data-layer="Background 1" data-node-id="319-1133" className="Background1 w-[1920px] h-[120px] left-0 top-[-5.72px] absolute" src="/assets/319-1133.webp" />
              </div>
            <div data-layer="Background" data-node-id="316-77" className="Background w-[1920px] h-[284.14px] left-[0.00px] top-[6188.41px] absolute bg-[#f7f6eb]">
                <div data-layer="(効果には個人差があります)" data-node-id="316-78" className="left-[1228.52px] top-[234.34px] absolute text-right justify-center text-[#333333] text-[9px] font-light font-['Hiragino_Kaku_Gothic_ProN']">(効果には個人差があります)</div>
                <div data-layer="Heading 3" data-node-id="316-79" className="Heading3 w-[768px] h-[191.34px] left-[576px] top-[32px] absolute">
                  <div data-layer="Strong" data-node-id="316-80" className="Strong w-[234.80px] h-9 left-[266.59px] top-[21px] absolute">
                    <div data-layer="成功率" data-node-id="316-81" className="left-0 top-0 absolute text-center justify-center text-[#a95000] text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">成功率 </div>
                    <div data-layer="91.3" data-node-id="316-82" className="3 left-[105.71px] top-[-17px] absolute text-center justify-center text-[#a95000] text-[45.20px] font-light font-['Hiragino_Kaku_Gothic_ProN']">91.3</div>
                    <div data-layer="%" data-node-id="316-83" className="left-[206.14px] top-0 absolute text-center justify-center text-[#a95000] text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">%</div>
                  </div>
                  <div data-layer="驚きの結果をご覧ください" data-node-id="316-84" className="left-[207.31px] top-[71.56px] absolute text-center justify-center text-[#a95000] text-[28.80px] font-light font-['Hiragino_Kaku_Gothic_ProN']">驚きの結果をご覧ください</div>
                  <div data-layer="ビフォアアフター" data-node-id="316-85" className="left-[265.64px] top-[113.15px] absolute text-center justify-center text-[#a95000] text-[28.80px] font-light font-['Hiragino_Kaku_Gothic_ProN']">ビフォアアフター</div>
                  <div data-layer="↓↓↓" data-node-id="316-86" className="left-[362.09px] top-[154.75px] absolute text-center justify-center text-[#a95000] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">↓↓↓</div>
                </div>
                <div data-layer="Background" data-node-id="316-1202" className="Background w-[1934px] h-[284px] left-0 top-[-0.41px] absolute bg-[#f7f6eb]">
                  <div data-layer="(効果には個人差があります)" data-node-id="316-1203" className="left-[1228.52px] top-[234.34px] absolute text-right justify-center text-[#333333] text-[9px] font-medium font-['YuGothic']">(効果には個人差があります)</div>
                  <div data-layer="Heading 3" data-node-id="316-1204" className="Heading3 w-[782px] h-[191.34px] left-[576px] top-[31.59px] absolute">
                    <div data-layer="Strong" data-node-id="316-1205" className="Strong w-[149px] h-9 left-[359px] top-[26.41px] absolute">
                      <div data-layer="成功率" data-node-id="316-1206" className="left-[-118px] top-0 absolute text-center justify-center text-[#a95000] text-[32px] font-bold font-['Noto_Sans_JP']">成功率 </div>
                      <div data-layer="91.3" data-node-id="316-1207" className="3 left-[-12px] top-[-13px] absolute text-center justify-center text-[#a95000] text-[50px] font-bold font-['Noto_Sans_JP']">91.3</div>
                      <div data-layer="%" data-node-id="316-1208" className="left-[118px] top-0 absolute text-center justify-center text-[#a95000] text-[32px] font-bold font-['Noto_Sans_JP']">%</div>
                    </div>
                    <div data-layer="驚きの結果をご覧ください" data-node-id="316-1209" className="left-[214.31px] top-[71.56px] absolute text-center justify-center text-[#a95000] text-[28.80px] font-bold font-['Noto_Sans_JP']">驚きの結果をご覧ください</div>
                    <div data-layer="ビフォアアフター" data-node-id="316-1210" className="left-[272.64px] top-[113.15px] absolute text-center justify-center text-[#a95000] text-[28.80px] font-bold font-['Noto_Sans_JP']">ビフォアアフター</div>
                    <div data-layer="↓↓↓" data-node-id="316-1211" className="left-[369.09px] top-[154.75px] absolute text-center justify-center text-[#a95000] text-sm font-bold font-['Noto_Sans_JP']">↓↓↓</div>
                  </div>
                </div>
              </div>
            <img data-layer="Figure → lp_009-%E2%80%93-2.jpg" data-node-id="316-87" className="FigureLp009E280932Jpg w-[800px] h-[800px] left-[560.00px] top-[6504.55px] absolute" src="/assets/316-87.webp" />
            <img data-layer="Figure → lp_004-%E2%80%93-2.jpg" data-node-id="316-88" className="FigureLp004E280932Jpg w-[800px] h-[800px] left-[560.00px] top-[7320.55px] absolute" src="/assets/316-88.webp" />
            <img data-layer="Figure → lp_002-%E2%80%93-3.jpg" data-node-id="316-89" className="FigureLp002E280933Jpg w-[800px] h-[800px] left-[560.00px] top-[8136.55px] absolute" src="/assets/316-89.webp" />
            <div data-layer="Background" data-node-id="316-90" className="Background w-[1920px] h-[936.23px] left-[0.00px] top-[9700.00px] absolute bg-[#ff86b4] z-30">
                <div data-layer="Heading 3 → Strong → 予約方法 → 予約方法はこちら" data-node-id="316-91" className="Heading3Strong left-[829.69px] top-[33px] absolute text-center justify-center text-white text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">予約方法はこちら</div>
                <div data-layer="List" data-node-id="316-92" className="List w-[768px] h-[65px] left-[576px] top-[102.39px] absolute">
                  <div data-layer="Item" data-node-id="316-93" className="Item w-[738px] h-[30px] left-[30px] top-0 absolute">
                    <div data-layer="Text" data-node-id="316-94" className="Text left-0 top-0 absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']"> </div>
                    <div data-layer="ご予約はLINEからになります。" data-node-id="316-95" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">ご予約はLINEからになります。</div>
                  </div>
                  <div data-layer="Item" data-node-id="316-96" className="Item w-[738px] h-[30px] left-[30px] top-[35px] absolute">
                    <div data-layer="Text" data-node-id="316-97" className="Text left-0 top-0 absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']"> </div>
                    <div data-layer="LINEは２４時間予約可能。" data-node-id="316-98" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">LINEは２４時間予約可能。</div>
                  </div>
                </div>
                <div data-layer="Container" data-node-id="316-99" className="Container w-[768px] h-[696.84px] left-[576px] top-[9820.00px] absolute overflow-hidden z-50">
                  <div data-layer="Background" data-node-id="316-100" className="Background w-[768px] h-[696.84px] left-0 top-0 absolute bg-white" />
                  <a href="https://lin.ee/xXOxJqxk" target="_self" className="absolute left-[32px] top-[60px] w-[704px] h-[305.06px] hover:opacity-90 transition-opacity cursor-pointer z-50" style={{paddingTop: "312px"}}><img data-layer="Figure → Link → LINE%E3%83%90%E3%83%8A%E3%83%BC-1.webp" data-node-id="316-101" className="w-full h-full" src="/assets/316-101.webp" style={{paddingTop: "312px"}} /></a>
                  <div data-layer="Background" data-node-id="316-102" className="Background w-[333.63px] h-[21px] left-[217.19px] top-[390.06px] absolute bg-gradient-to-b from-[#b7e3ff]/0 to-[#b7e3ff]" style={{backgroundColor: "#e0e0e0", borderColor: "#f7f7f7", marginTop: "446px"}}>
                    <div data-layer="Strong" data-node-id="316-103" className="Strong w-[329.63px] h-[22px] left-[2px] top-[-2px] absolute" style={{backgroundColor: "#f7f7f9", marginBottom: "-22px", marginTop: "-42px"}}>
                      <a href="http://b.hpr.jp/kr/hp/H000813406" target="_self" className="left-0 top-0 absolute text-center justify-center text-black text-xl font-bold font-['Noto_Sans_JP'] hover:text-[#e52b79] transition-colors cursor-pointer whitespace-nowrap z-50">ホットペッパー予約はこちらから</a>
                      <div data-layer="Mask Group" data-node-id="316-105" className="MaskGroup w-5 h-9 left-[307.62px] top-[-7px] absolute">
                        <div data-layer="Mask" data-node-id="316-106" className="Mask w-5 h-9 left-0 top-0 absolute overflow-hidden">
                          <div data-layer="image" data-node-id="316-107" className="Image w-5 h-5 left-0 top-[8px] absolute overflow-hidden">
                            <img data-layer="Vector" data-node-id="316-108" className="Vector w-[12.25px] h-[7.06px] left-[3.88px] top-[6.88px] absolute" src="/assets/316-108.svg" />
                          </div>
                        </div>
                        <div data-layer="Background" data-node-id="316-109" className="Background w-5 h-9 left-0 top-0 absolute bg-black" />
                      </div>
                    </div>
                  </div>
                  <img data-layer="Figure → Link → hpb-banner-1.webp" data-node-id="316-110" className="FigureLinkHpbBanner1Webp w-[704px] h-[231.78px] left-[32px] top-[433.06px] absolute" src="/assets/316-110.webp" />
                  <div data-layer="Heading 2" data-node-id="316-111" className="Heading2 w-[320.72px] h-[26px] left-[223.64px] top-[33px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="LINE簡単予約はこちらをタップ" data-node-id="316-112" className="Line left-[2px] top-[2px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">LINE簡単予約はこちらをタップ</div>
                    <div data-layer="Mask Group" data-node-id="316-113" className="MaskGroup w-[20.20px] h-7 left-[296.52px] top-[-1px] absolute">
                      <div data-layer="Mask" data-node-id="316-114" className="Mask w-[20.20px] h-7 left-0 top-0 absolute overflow-hidden">
                        <div data-layer="image" data-node-id="316-115" className="Image w-[20.20px] h-[20.20px] left-0 top-[3.90px] absolute overflow-hidden">
                          <img data-layer="Vector" data-node-id="316-116" className="Vector w-[12.37px] h-[7.13px] left-[3.91px] top-[6.94px] absolute" src="/assets/316-116.svg" />
                        </div>
                      </div>
                      <div data-layer="Background" data-node-id="316-117" className="Background w-[20.20px] h-7 left-0 top-0 absolute bg-black" />
                    </div>
                  </div>
                  <div data-layer="Container" data-node-id="316-1170" className="Container w-[768px] h-[696.84px] left-0 top-[0.06px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="316-1171" className="Background w-[768px] h-[696.84px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → Link → LINE%E3%83%90%E3%83%8A%E3%83%BC-1.webp" data-node-id="316-1172" className="FigureLinkLineE38390E3838aE383Bc1Webp w-[704px] h-[305.06px] left-[32px] top-[60px] absolute" src="/assets/316-1172.webp" />
                    <div data-layer="Background" data-node-id="316-1173" className="Background w-[333.63px] h-[21px] left-[217.19px] top-[390.06px] absolute bg-gradient-to-b from-[#b7e3ff]/0 to-[#b7e3ff]">
                      <div data-layer="Strong" data-node-id="316-1174" className="Strong w-[329.63px] h-[22px] left-[2px] top-[-2px] absolute">
                        <a href="http://b.hpr.jp/kr/hp/H000813406" target="_self" className="left-0 top-0 absolute text-center justify-center text-black text-xl font-bold font-['Noto_Sans_JP'] hover:text-[#e52b79] transition-colors cursor-pointer whitespace-nowrap z-50">ホットペッパー予約はこちらから</a>
                        <div data-layer="Mask Group" data-node-id="316-1176" className="MaskGroup w-5 h-9 left-[307.62px] top-[-7px] absolute">
                          <div data-layer="Mask" data-node-id="316-1177" className="Mask w-5 h-9 left-0 top-0 absolute overflow-hidden">
                            <div data-layer="image" data-node-id="316-1178" className="Image w-5 h-5 left-0 top-[8px] absolute overflow-hidden">
                              <img data-layer="Vector" data-node-id="316-1179" className="Vector w-[12.25px] h-[7.06px] left-[3.88px] top-[6.88px] absolute" src="/assets/316-1179.svg" />
                            </div>
                          </div>
                          <div data-layer="Background" data-node-id="316-1180" className="Background w-5 h-9 left-0 top-0 absolute bg-black" />
                        </div>
                      </div>
                    </div>
                    <img data-layer="Figure → Link → hpb-banner-1.webp" data-node-id="316-1181" className="FigureLinkHpbBanner1Webp w-[704px] h-[231.78px] left-[32px] top-[433.06px] absolute overflow-hidden" src="/assets/316-1181.webp" />
                    <div data-layer="Heading 2" data-node-id="316-1184" className="Heading2 w-[315px] h-[23px] left-[222px] top-[24px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="LINE簡単予約はこちらをタップ" data-node-id="316-1185" className="Line left-0 top-[2px] absolute text-center justify-center text-black text-xl font-bold font-['Noto_Sans_JP']">LINE簡単予約はこちらをタップ</div>
                      <div data-layer="Mask Group" data-node-id="316-1186" className="MaskGroup w-[20.20px] h-7 left-[294.52px] top-[-1px] absolute">
                        <div data-layer="Mask" data-node-id="316-1187" className="Mask w-[20.20px] h-7 left-0 top-0 absolute overflow-hidden">
                          <div data-layer="image" data-node-id="316-1188" className="Image w-[20.20px] h-[20.20px] left-0 top-[3.90px] absolute overflow-hidden">
                            <img data-layer="Vector" data-node-id="316-1189" className="Vector w-[12.37px] h-[7.13px] left-[3.91px] top-[6.94px] absolute" src="/assets/316-1189.svg" />
                          </div>
                        </div>
                        <div data-layer="Background" data-node-id="316-1190" className="Background w-[20.20px] h-7 left-0 top-0 absolute bg-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <img data-layer="Figure → %E7%9F%A2%E5%8D%B0-1.png" data-node-id="316-659" className="FigureE79fA2E58dB01Png w-[458px] h-5 left-[731.00px] top-[6136.41px] absolute" src="/assets/316-659.webp" />
            <div data-layer="Heading 2" data-node-id="316-660" className="Heading2 w-[415.17px] h-[167.39px] left-[752.41px] top-[5930.03px] absolute">
                <div data-layer="そのお悩み、" data-node-id="316-661" className="left-[63.28px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[28px] font-light font-['Hiragino_Kaku_Gothic_ProN']">そのお悩み、</div>
                <div data-layer="Paragraph+Background" data-node-id="316-662" className="ParagraphBackground w-[316.80px] h-[79.80px] left-[49.18px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                  <div data-layer="諦めずに" data-node-id="316-663" className="left-[187.93px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[28px] font-light font-['Hiragino_Kaku_Gothic_ProN']">諦めずに</div>
                  <div data-layer="当院にお任せください！" data-node-id="316-664" className="left-0 top-[46.80px] absolute text-center justify-center text-[#ff2678] text-[28px] font-light font-['Hiragino_Kaku_Gothic_ProN']">当院にお任せください！</div>
                </div>
                <div data-layer="あなたも「3ヶ月」で人生最後の ダイエットに成功しませんか？" data-node-id="316-665" className="3 left-0 top-[91.60px] absolute text-center justify-center text-[#ff2678] text-[28px] font-light font-['Hiragino_Kaku_Gothic_ProN']">あなたも「3ヶ月」で人生最後の<br/>ダイエットに成功しませんか？</div>
              </div>
            <img data-layer="769×627 CTA 1" data-node-id="316-1191" className="627Cta1 w-[769px] h-[627px] left-[575.00px] top-[9001px] absolute" src="/assets/316-1191.webp" />
            <img data-layer="Border 1" data-node-id="316-1212" className="Border1 w-[768px] h-[1139px] left-[576.00px] top-[1555px] absolute" src="/assets/316-1212.webp" />
            <div data-layer="Frame 5" data-node-id="316-1217" className="Frame5 w-[768px] h-[643px] left-[576.00px] top-0 absolute">
                <img data-layer="Gemini_Generated_Image_sc0dnlsc0dnlsc0d 1" data-node-id="316-1218" className="GeminiGeneratedImageSc0dnlsc0dnlsc0d1 w-[768px] h-[643px] left-0 top-0 absolute" src="/assets/316-1218.webp" />
                <img data-layer="768×643　FV 1" data-node-id="316-1219" className="643Fv1 w-[768px] h-[643px] left-0 top-0 absolute" src="/assets/316-1219.webp" />
              </div>
          </div>
          <div data-layer="Main" data-node-id="320-1138" className="Main w-[1920px] h-[21641px] left-0 top-[120px] absolute">
            <img data-layer="Figure → %E3%82%AD%E3%83%A3%E3%83%B3%E3%83%9A%E3%83%BC%E3%83%B3%E5%A5%B3%E6%80%A7.webp" data-node-id="320-1147" className="FigureE382AdE383A3E383B3E3839aE383BcE383B3E5A5B3E680A7Webp w-[634px] h-[254px] left-[643.00px] top-[10720.58px] absolute z-10" src="/assets/320-1147.webp" />
            <div data-layer="などの不安を解消して頂く為に、初回キャンペーンをしています。ただ今、予約が多数で人数限定のキャ ンペーンになります。予約をご希望の方はお早めにご連絡をお願いいたします。" data-node-id="320-1148" className="left-[576.00px] top-[11228.69px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">などの不安を解消して頂く為に、初回キャンペーンをしています。ただ今、予約が多数で人数限定のキャ<br/>ンペーンになります。予約をご希望の方はお早めにご連絡をお願いいたします。</div>
            <div data-layer="Border" data-node-id="320-1149" className="Border w-[768px] h-[1105.69px] left-[3164.00px] top-[-2360px] absolute outline outline-1 outline-offset-[-1px] outline-[#ff2678]">
                <img data-layer="Figure → %E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97-575-1024x654.webp" data-node-id="320-1150" className="FigureE382B0E383AbE383BcE383975751024x654Webp w-[718px] h-[458.56px] left-[25px] top-[25px] absolute" src="/assets/320-1150.webp" />
                <div data-layer="通常10,000円" data-node-id="320-1151" className="10000 left-[268.39px] top-[522.56px] absolute text-center justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">通常10,000円　</div>
                <div data-layer="Background" data-node-id="320-1152" className="Background w-[90.03px] h-8 left-[409.56px] top-[517.56px] absolute bg-[#fe2577] rounded-[1px]">
                  <div data-layer="Strong → 90%OFF" data-node-id="320-1153" className="Strong90Off left-[5px] top-[5px] absolute text-center justify-center text-white text-[19.10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">90%OFF</div>
                </div>
                <div data-layer="Background" data-node-id="320-1154" className="Background w-[242.91px] h-8 left-[262.55px] top-[558.56px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                  <div data-layer="Strong → Mark → 初回限定980円(税込)" data-node-id="320-1155" className="StrongMark980 left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-2xl font-light font-['Hiragino_Kaku_Gothic_ProN']">初回限定980円(税込)</div>
                </div>
                <div data-layer="Strong" data-node-id="320-1156" className="Strong w-[273.08px] h-5 left-[25px] top-[969.50px] absolute">
                  <div data-layer="※初回キャンペーンは" data-node-id="320-1157" className="left-0 top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">※初回キャンペーンは</div>
                  <div data-layer="Background" data-node-id="320-1158" className="Background w-[127.14px] h-5 left-[145.94px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="各店舗毎月6名限定" data-node-id="320-1159" className="6 left-[2px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">各店舗毎月6名限定</div>
                  </div>
                </div>
                <div data-layer="Strong" data-node-id="320-1160" className="Strong w-[412.69px] h-5 left-[25px] top-[998.30px] absolute">
                  <div data-layer="※" data-node-id="320-1161" className="left-0 top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">※</div>
                  <div data-layer="Background" data-node-id="320-1162" className="Background w-[149.94px] h-5 left-[14.39px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="午前中は埋まりやすい" data-node-id="320-1163" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">午前中は埋まりやすい</div>
                  </div>
                  <div data-layer="ので、早めのご連絡をお願いします。" data-node-id="320-1164" className="left-[164.33px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">ので、早めのご連絡をお願いします。</div>
                </div>
                <div data-layer="Strong" data-node-id="320-1165" className="Strong w-[500.06px] h-[48.80px] left-[25px] top-[1027.10px] absolute">
                  <div data-layer="※対応人数に限りがあるため、" data-node-id="320-1166" className="left-0 top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">※対応人数に限りがあるため、</div>
                  <div data-layer="Background" data-node-id="320-1167" className="Background w-[149.94px] h-5 left-[203.84px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="本気で痩せたい方のみ" data-node-id="320-1168" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">本気で痩せたい方のみ</div>
                  </div>
                  <div data-layer="受け付けております。" data-node-id="320-1169" className="left-[353.78px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">受け付けております。</div>
                  <div data-layer="※" data-node-id="320-1170" className="left-0 top-[30.79px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">※</div>
                  <div data-layer="Background" data-node-id="320-1171" className="Background w-[296.88px] h-5 left-[14.39px] top-[28.79px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="何をやっても痩せない方もお任せください。" data-node-id="320-1172" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">何をやっても痩せない方もお任せください。</div>
                  </div>
                </div>
                <div data-layer="Border" data-node-id="320-1173" className="Border w-[718px] h-[175.59px] left-[25px] top-[629.91px] absolute outline outline-1 outline-offset-[-1px] outline-[#ff2678]">
                  <div data-layer="Background" data-node-id="320-1174" className="Background w-[122.63px] h-[25px] left-[237.69px] top-[26px] absolute bg-[#fe2577] rounded-[1px]">
                    <div data-layer="カウンセリング" data-node-id="320-1175" className="left-[4px] top-[4px] absolute text-center justify-center text-white text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">カウンセリング</div>
                  </div>
                  <div data-layer="Background" data-node-id="320-1176" className="Background w-[104px] h-[25px] left-[376.31px] top-[26px] absolute bg-[#fe2577] rounded-[1px]">
                    <div data-layer="痩身整体体験" data-node-id="320-1177" className="left-[4px] top-[4px] absolute text-center justify-center text-white text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">痩身整体体験</div>
                  </div>
                  <div data-layer="Background" data-node-id="320-1178" className="Background w-[121.88px] h-[25px] left-[229.50px] top-[70.79px] absolute bg-[#fe2577] rounded-[1px]">
                    <div data-layer="ダイエット指導" data-node-id="320-1179" className="left-[4px] top-[4px] absolute text-center justify-center text-white text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエット指導</div>
                  </div>
                  <div data-layer="Background" data-node-id="320-1180" className="Background w-[121.13px] h-[25px] left-[367.38px] top-[70.79px] absolute bg-[#fe2577] rounded-[1px]">
                    <div data-layer="個別プラン作成" data-node-id="320-1181" className="left-[4px] top-[4px] absolute text-center justify-center text-white text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">個別プラン作成</div>
                  </div>
                  <div data-layer="Strong → 時間 約90分" data-node-id="320-1182" className="Strong90 left-[305.09px] top-[121.59px] absolute text-center justify-center text-[#333333] text-[19.10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">時間 約90分</div>
                </div>
                <div data-layer="Background" data-node-id="320-1183" className="Background w-[88.38px] h-[32.28px] left-[25px] top-[598.63px] absolute bg-[#ff2678]">
                  <div data-layer="Strong → 初回内容" data-node-id="320-1184" className="Strong left-[10.19px] top-[6.39px] absolute text-center justify-center text-white text-[17px] font-light font-['Hiragino_Kaku_Gothic_ProN']">初回内容</div>
                </div>
                <a href="https://lin.ee/xXOxJqxk" target="_self" data-layer="Link" data-node-id="320-1185" className="Link w-[574.39px] h-14 left-[96.80px] top-[821.50px] absolute bg-[#62d847] rounded-[80px] shadow-[0px_4px_0px_0px_rgba(74,162,53,1.00)] hover:scale-[1.02] transition-transform duration-150 cursor-pointer flex items-center justify-center">
                  <div data-layer="今すぐLINEで予約する" data-node-id="320-1186" className="Line text-center text-white text-base font-bold font-['Noto_Sans_JP'] mr-2">今すぐLINEで予約する</div>
                  <img data-layer="SVG" data-node-id="320-1187" className="Svg w-[19.36px] h-[19.36px] left-[372.87px] top-[18.31px] absolute overflow-hidden" src="/assets/320-1187.svg" />
              </a>
                <a href="http://b.hpr.jp/kr/hp/H000813406" target="_self" data-layer="Link" data-node-id="320-1192" className="Link w-[574.39px] h-14 left-[96.80px] top-[893.50px] absolute bg-[#e52b79] rounded-[80px] shadow-[0px_4px_0px_0px_rgba(172,32,91,1.00)] hover:scale-[1.02] transition-transform duration-150 cursor-pointer flex items-center justify-center">
                  <div data-layer="ホットペッパーで予約する" data-node-id="320-1193" className="Line text-center text-white text-base font-bold font-['Noto_Sans_JP'] mr-2">ホットペッパーで予約する</div>
                  <img data-layer="SVG" data-node-id="320-1194" className="Svg w-[19.36px] h-[19.36px] left-[387.39px] top-[18.31px] absolute overflow-hidden" src="/assets/320-1194.svg" />
              </a>
              </div>
            <div data-layer="Background" data-node-id="320-1280" className="Background w-[1920px] h-[108.80px] left-[0.00px] top-[10595.78px] absolute bg-[#f7f6eb]">
                <div data-layer="Heading 3 → なぜ初回キャンペーンをしているのか？" data-node-id="320-1281" className="Heading3 left-[664.94px] top-[36px] absolute text-center justify-center text-[#ff2678] text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">なぜ初回キャンペーンをしているのか？</div>
              </div>
            <div data-layer="List" data-node-id="320-1282" className="List w-[768px] h-[108px] left-[576.00px] top-[11079.69px] absolute">
                <div data-layer="Item" data-node-id="320-1283" className="Item w-[764px] h-6 left-[4px] top-0 absolute">
                  <div data-layer="Strong" data-node-id="320-1284" className="Strong w-[247.75px] h-[21px] left-[24px] top-[1px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="どんな先生が担当してくれるの？" data-node-id="320-1285" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">どんな先生が担当してくれるの？</div>
                  </div>
                  <div data-layer="Icon" data-node-id="320-1286" className="Icon w-4 h-4 left-0 top-[4px] absolute">
                    <img data-layer="Vector" data-node-id="320-1287" className="Vector w-[14.34px] h-[10.91px] left-[0.83px] top-[2.33px] absolute" src="/assets/320-1287.svg" />
                  </div>
                </div>
                <div data-layer="Item" data-node-id="320-1288" className="Item w-[764px] h-6 left-[4px] top-[28px] absolute">
                  <div data-layer="Strong" data-node-id="320-1289" className="Strong w-[215px] h-[21px] left-[24px] top-[1px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="自分の悩みで行っていいの？" data-node-id="320-1290" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">自分の悩みで行っていいの？</div>
                  </div>
                  <div data-layer="Icon" data-node-id="320-1291" className="Icon w-4 h-4 left-0 top-[4px] absolute">
                    <img data-layer="Vector" data-node-id="320-1292" className="Vector w-[14.34px] h-[10.91px] left-[0.83px] top-[2.33px] absolute" src="/assets/320-1292.svg" />
                  </div>
                </div>
                <div data-layer="Item" data-node-id="320-1293" className="Item w-[764px] h-6 left-[4px] top-[56px] absolute">
                  <div data-layer="Strong" data-node-id="320-1294" className="Strong w-[248.13px] h-[21px] left-[24px] top-[1px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="自分に合うかまずは試してみたい" data-node-id="320-1295" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">自分に合うかまずは試してみたい</div>
                  </div>
                  <div data-layer="Icon" data-node-id="320-1296" className="Icon w-4 h-4 left-0 top-[4px] absolute">
                    <img data-layer="Vector" data-node-id="320-1297" className="Vector w-[14.34px] h-[10.91px] left-[0.83px] top-[2.33px] absolute" src="/assets/320-1297.svg" />
                  </div>
                </div>
                <div data-layer="Item" data-node-id="320-1298" className="Item w-[764px] h-6 left-[4px] top-[84px] absolute">
                  <div data-layer="Strong" data-node-id="320-1299" className="Strong w-[215.38px] h-[21px] left-[24px] top-[1px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="具体的にどんなダイエット？" data-node-id="320-1300" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">具体的にどんなダイエット？</div>
                  </div>
                  <div data-layer="Icon" data-node-id="320-1301" className="Icon w-4 h-4 left-0 top-[4px] absolute">
                    <img data-layer="Vector" data-node-id="320-1302" className="Vector w-[14.34px] h-[10.91px] left-[0.83px] top-[2.33px] absolute" src="/assets/320-1302.svg" />
                  </div>
                </div>
              </div>
            <div data-layer="Background" data-node-id="320-1303" className="Background w-[1920px] h-[395.59px] left-[0.00px] top-[11313.28px] absolute bg-[#ff86b4]">
                <div data-layer="Heading 3 → Strong → 私の → 私のダイエットをお受けいただくにあたり、1つだけ条件があります。" data-node-id="320-1304" className="Heading3Strong1 left-[635.36px] top-[32px] absolute text-center justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">私のダイエットをお受けいただくにあたり、1つだけ条件があります。</div>
                <div data-layer="Background+Border" data-node-id="320-1305" className="BackgroundBorder w-[767.70px] h-[191.59px] left-[576.30px] top-[96px] absolute bg-[#f7f7f7] outline outline-1 outline-offset-[-1px] outline-[#ff2678]">
                  <div data-layer="Strong" data-node-id="320-1306" className="Strong w-[213.47px] h-[115.59px] left-[277.11px] top-[38px] absolute">
                    <div data-layer="Mark → 運動なしで3ヶ月以内に" data-node-id="320-1307" className="Mark3 left-0 top-0 absolute text-center justify-center text-[#c19c00] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">運動なしで3ヶ月以内に</div>
                    <div data-layer="Mark → 8kg" data-node-id="320-1308" className="Mark8kg left-[59.17px] top-[39px] absolute text-center justify-center text-[#ff2678] text-3xl font-light font-['Hiragino_Kaku_Gothic_ProN']">8kg</div>
                    <div data-layer="Mark" data-node-id="320-1309" className="Mark w-[183.28px] h-[65.59px] left-[15.09px] top-[50px] absolute">
                      <div data-layer="以上" data-node-id="320-1310" className="left-[99.22px] top-0 absolute text-center justify-center text-[#c19c00] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">以上</div>
                      <div data-layer="お痩せになりたい方" data-node-id="320-1311" className="left-0 top-[43.60px] absolute text-center justify-center text-[#c19c00] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">お痩せになりたい方</div>
                    </div>
                  </div>
                  <div data-layer="Border" data-node-id="320-1312" className="Border w-[753.70px] h-[177.59px] left-[7px] top-[7px] absolute border border-[#c7c7c7]/60" />
                </div>
                <div data-layer="Heading 2 → そんなあなたは&#10;そのまま読み進めてください！" data-node-id="320-1313" className="Heading2 left-[816.02px] top-[310.60px] absolute text-center justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">そんなあなたは<br/>そのまま読み進めてください！</div>
              </div>
            <div data-layer="Background" data-node-id="320-1314" className="Background w-[1920px] h-[99.83px] left-[0.00px] top-[12907.58px] absolute bg-[#ff86b4]">
                <div data-layer="Heading 2 → 何故なら・・・" data-node-id="320-1315" className="Heading2 left-[869.11px] top-[35px] absolute text-center justify-center text-white text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">何故なら・・・</div>
              </div>
            <div data-layer="Background" data-node-id="320-1316" className="Background w-[1920px] h-[739.05px] left-[0.00px] top-[13007.41px] absolute bg-[#f7f7f7]">
                <div data-layer="Strong" data-node-id="320-1317" className="Strong w-[762.69px] h-[85.31px] left-[576px] top-[37px] absolute">
                  <div data-layer="実はこのような 「 決してムキムキって訳ではないけど、無駄な脂肪がない健康的なスリムな体 型 」 というのは、必ずしも" data-node-id="320-1318" className="left-0 top-0 absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">実はこのような 「 決してムキムキって訳ではないけど、無駄な脂肪がない健康的なスリムな体<br/>型 」 というのは、必ずしも</div>
                  <div data-layer="Mark" data-node-id="320-1319" className="Mark w-[640px] h-[45px] left-[65px] top-[35px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]/60 z-0">
                    <div data-layer="キツい筋トレやハードな運動の積み重ねが必要な訳じゃないからなのです！" data-node-id="320-1320" className="left-[20px] top-[2px] absolute justify-center text-[#ff2678] text-lg font-bold font-['Hiragino_Kaku_Gothic_ProN'] whitespace-nowrap z-10">キツい筋トレやハードな運動の積み重ねが必要な訳じゃないからなのです！</div>
                    
                  </div>
                </div>
                <div data-layer="Strong" data-node-id="320-1322" className="Strong w-[360.91px] h-[190.84px] left-[576px] top-[164.15px] absolute">
                  <div data-layer="つまり、" data-node-id="320-1323" className="left-0 top-[2px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">つまり、</div>
                  <div data-layer="Mark" data-node-id="320-1324" className="Mark w-[360.91px] h-[52.14px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="ダイエットとボディメイクは全く別" data-node-id="320-1325" className="left-[73.63px] top-[2px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットとボディメイクは全く別</div>
                    <div data-layer="物" data-node-id="320-1326" className="left-0 top-[30.14px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">物</div>
                  </div>
                  <div data-layer="なんです！" data-node-id="320-1327" className="left-[19.59px] top-[30.14px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">なんです！</div>
                  <div data-layer="これらは目的も違えばアプローチの方法も全 く変わってきます。今一度、あなたはダイエ ットがしたいのか？それともボディメイクが したいのか？自分に質問を投げかけてくださ い。" data-node-id="320-1328" className="left-0 top-[58.28px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">これらは目的も違えばアプローチの方法も全<br/>く変わってきます。今一度、あなたはダイエ<br/>ットがしたいのか？それともボディメイクが<br/>したいのか？自分に質問を投げかけてくださ<br/>い。</div>
                </div>
                <div data-layer="Strong" data-node-id="320-1329" className="Strong w-[360.48px] h-[104.42px] left-[576px] top-[380.73px] absolute">
                  <div data-layer="もし、その質問の問いにあなた自身が、ムキ ムキを目指すボディメイクでなく、" data-node-id="320-1330" className="left-0 top-0 absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">もし、その質問の問いにあなた自身が、ムキ<br/>ムキを目指すボディメイクでなく、</div>
                  <div data-layer="Mark" data-node-id="320-1331" className="Mark w-[359.67px] h-[52.14px] left-0 top-[26.14px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="健康的な" data-node-id="320-1332" className="left-[288.88px] top-[2px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">健康的な</div>
                    <div data-layer="スリムな体型を目指すダイエットをしたい" data-node-id="320-1333" className="left-0 top-[30.14px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">スリムな体型を目指すダイエットをしたい</div>
                  </div>
                  <div data-layer="の" data-node-id="320-1334" className="left-[342.47px] top-[56.28px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">の</div>
                  <div data-layer="であれば、安心して私にお任せください！！" data-node-id="320-1335" className="left-0 top-[84.42px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">であれば、安心して私にお任せください！！</div>
                </div>
                <div data-layer="Strong → Mark" data-node-id="320-1336" className="StrongMark w-[289.53px] h-6 left-[576px] top-[520.89px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                  <div data-layer="人生最後のダイエット" data-node-id="320-1337" className="left-[2px] top-[-7px] absolute justify-center text-[#ff2678] text-[28.20px] font-light font-['Hiragino_Kaku_Gothic_ProN']">人生最後のダイエット</div>
                </div>
                <div data-layer="Mark → Strong → に" data-node-id="320-1338" className="MarkStrong left-[865.53px] top-[522.89px] absolute justify-center text-black text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">に</div>
                <div data-layer="Strong" data-node-id="320-1339" className="Strong w-[361.16px] h-[53.05px] left-[576px] top-[522.89px] absolute">
                  <div data-layer="致しま" data-node-id="320-1340" className="left-[307.55px] top-0 absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">致しま</div>
                  <div data-layer="す。" data-node-id="320-1341" className="left-0 top-[33.04px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">す。</div>
                </div>
                <img data-layer="Figure → 193.webp" data-node-id="320-1342" className="Figure193Webp w-[372px] h-[248px] left-[972px] top-[213.51px] absolute rounded-full" src="/assets/320-1342.webp" />
                <div data-layer="Strong → ダイエットに強いビオ整体院" data-node-id="320-1343" className="Strong left-[1132.63px] top-[481.51px] absolute text-right justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットに強いビオ整体院<br/>代表 小泉 宏輝</div>
                <div data-layer="Strong" data-node-id="320-1344" className="Strong w-[767.27px] h-[85.31px] left-[576px] top-[617.07px] absolute">
                  <div data-layer="とは言っても、本当に運動なしでダイエット成功できるのか？？と疑問を持つ方が一定数おられ るかと思いますので、" data-node-id="320-1345" className="left-0 top-0 absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">とは言っても、本当に運動なしでダイエット成功できるのか？？と疑問を持つ方が一定数おられ<br/>るかと思いますので、</div>
                  <div data-layer="Strong" data-node-id="320-1346" className="Strong w-[752.52px] h-[55.66px] left-0 top-[29.66px] absolute">
                    <div data-layer="まずは実際に" data-node-id="320-1347" className="left-[179.25px] top-[2px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">まずは実際に</div>
                    <div data-layer="Mark" data-node-id="320-1348" className="Mark w-[752.52px] h-[55.66px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="当院でダイエットに成功した方の喜びの声の一部をご覧く" data-node-id="320-1349" className="left-[288.47px] top-[2px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">当院でダイエットに成功した方の喜びの声の一部をご覧く</div>
                      <div data-layer="ださい。" data-node-id="320-1350" className="left-0 top-[33.66px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">ださい。</div>
                    </div>
                  </div>
                </div>
                <div data-layer="Background" data-node-id="320-1351" className="Background w-[1920px] h-[739.05px] left-0 top-[-15.41px] absolute bg-[#f7f7f7]">
                  <div data-layer="Strong" data-node-id="320-1352" className="Strong w-[762.69px] h-[85.31px] left-[576px] top-[37px] absolute">
                    <div data-layer="実はこのような 「 決してムキムキって訳ではないけど、無駄な脂肪がない健康的なスリムな体 型 」 というのは、必ずしも" data-node-id="320-1353" className="left-0 top-0 absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">実はこのような 「 決してムキムキって訳ではないけど、無駄な脂肪がない健康的なスリムな体<br/>型 」 というのは、必ずしも</div>
                    <div data-layer="Mark" data-node-id="320-1354" className="Mark w-[640px] h-[45px] left-[65px] top-[35px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]/60 z-0">
                      <div data-layer="キツい筋トレやハードな運動の積み重ねが必要な訳じゃないからなのです！" data-node-id="320-1355" className="left-[20px] top-[36px] absolute justify-center text-[#ff2678] text-lg font-bold font-['Noto_Sans_JP'] whitespace-nowrap z-10">キツい筋トレやハードな運動の積み重ねが必要な訳じゃないからなのです！</div>
                    </div>
                    <div data-layer="Mark" data-node-id="320-1356" className="Mark w-[90px] h-14 left-0 top-[31.59px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      
                    </div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1358" className="Strong w-[361px] h-[185px] left-[576px] top-[169.59px] absolute">
                    <div data-layer="Mark" data-node-id="320-1359" className="Mark w-[301px] h-[22px] left-[65px] top-0 absolute bg-[#fcf69f]" />
                    <div data-layer="つまり、" data-node-id="320-1360" className="left-0 top-[2px] absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">つまり、</div>
                    <div data-layer="なんです！" data-node-id="320-1361" className="left-0 top-[30.44px] absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">なんです！</div>
                    <div data-layer="これらは目的も違えばアプローチの方法も全 く変わってきます。今一度、あなたはダイエ ットがしたいのか？それともボディメイクが したいのか？自分に質問を投げかけてくださ い。" data-node-id="320-1362" className="left-0 top-[58.28px] absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">これらは目的も違えばアプローチの方法も全<br/>く変わってきます。今一度、あなたはダイエ<br/>ットがしたいのか？それともボディメイクが<br/>したいのか？自分に質問を投げかけてくださ<br/>い。</div>
                    <div data-layer="ダイエットとボディメイクは全く別物" data-node-id="320-1363" className="left-[65px] top-0 absolute justify-center text-[#ff2678] text-lg font-bold font-['Noto_Sans_JP'] whitespace-nowrap">ダイエットとボディメイクは全く別物</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1364" className="Strong w-[360.48px] h-[104.42px] left-[576px] top-[383px] absolute">
                    <div data-layer="Mark" data-node-id="320-1365" className="Mark w-[81px] h-[22px] left-[279px] top-[26px] absolute bg-[#fcf69f]" />
                    <div data-layer="もし、その質問の問いにあなた自身が、ムキ ムキを目指すボディメイクでなく、健康的な" data-node-id="320-1366" className="left-0 top-0 absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">もし、その質問の問いにあなた自身が、ムキ<br/>ムキを目指すボディメイクでなく、健康的な</div>
                    <div data-layer="Mark" data-node-id="320-1367" className="Mark w-[360px] h-[21px] left-0 top-[57px] absolute bg-[#fcf69f]" />
                    <div data-layer="スリムな体型を目指すダイエットをしたいの" data-node-id="320-1368" className="left-0 top-[58px] absolute justify-center text-[#ff2678] text-lg font-bold font-['Noto_Sans_JP']">スリムな体型を目指すダイエットをしたいの</div>
                    <div data-layer="であれば、安心して私にお任せください！！" data-node-id="320-1369" className="left-0 top-[84.42px] absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">であれば、安心して私にお任せください！！</div>
                  </div>
                  <div data-layer="Strong → Mark" data-node-id="320-1370" className="StrongMark w-[289.53px] h-6 left-[576px] top-[520.89px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="人生最後のダイエットに致します。" data-node-id="320-1371" className="left-[2px] top-[-6.89px] absolute justify-center text-[#ff2678] text-[28.20px] font-bold font-['Noto_Sans_JP']">人生最後のダイエットに致します。</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1372" className="Strong w-[366px] h-[53px] left-[579px] top-[514px] absolute" />
                  <img data-layer="Figure → 193.webp" data-node-id="320-1373" className="Figure193Webp w-[372px] h-[248px] left-[972px] top-[213.51px] absolute rounded-full overflow-hidden" src="/assets/320-1373.webp" />
                  <div data-layer="Strong → ダイエットに強いビオ整体院" data-node-id="320-1375" className="Strong left-[1132.63px] top-[481.51px] absolute text-right justify-center text-[#333333] text-base font-bold font-['Noto_Sans_JP']">ダイエットに強いゆい整骨院<br/>代表 長岡　ゆい</div>
                  <div data-layer="Strong" data-node-id="320-1376" className="Strong w-[1000px] h-[60px] left-[576px] top-[614px] absolute">
                    <div data-layer="Mark" data-node-id="320-1377" className="Mark w-[535px] h-[19px] left-[288px] top-[33px] absolute bg-[#fcf69f]" />
                    <div data-layer="とは言っても、本当に運動なしでダイエット成功できるのか？？と疑問を持つ方が一定数おられ るかと思いますので、まずは実際に" data-node-id="320-1378" className="left-0 top-0 absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">とは言っても、本当に運動なしでダイエット成功できるのか？？と疑問を持つ方が一定数おられ<br/>るかと思いますので、まずは実際に</div>
                    <div data-layer="当院でダイエットに成功した方の喜びの声の一部をご覧ください。" data-node-id="320-1379" className="left-[288px] top-[32px] absolute justify-center text-[#ff2678] text-lg font-bold font-['Noto_Sans_JP'] whitespace-nowrap">当院でダイエットに成功した方の喜びの声の一部をご覧ください。</div>
                  </div>
                </div>
              </div>
            <div data-layer="Background" data-node-id="320-1380" className="Background w-[1920px] h-[5284.19px] left-[0.00px] top-[13746.45px] absolute bg-[#f7f6eb]">
                <div data-layer="Strong → 北名古屋市" data-node-id="320-1381" className="Strong left-[763.94px] top-[41px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">北名古屋市</div>
                <div data-layer="Strong" data-node-id="320-1382" className="Strong w-[374.38px] h-[122.13px] left-[781.69px] top-[39px] absolute">
                  <div data-layer="で" data-node-id="320-1383" className="left-[110.22px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">で</div>
                  <div data-layer="Background" data-node-id="320-1384" className="Background w-[237.95px] h-8 left-[136.42px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="話題のダイエット！" data-node-id="320-1385" className="left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">話題のダイエット！</div>
                  </div>
                  <div data-layer="お客様の声&amp;ビフォアアフター 一部を公開します！" data-node-id="320-1386" className="left-0 top-[48.07px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">お客様の声&ビフォアアフター<br/>一部を公開します！</div>
                </div>
                <div data-layer="Container" data-node-id="320-1387" className="Container w-[768px] h-[430px] left-[576px] top-[202.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1388" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA01.webp" data-node-id="320-1389" className="FigureBa01Webp w-[339.98px] h-[267.91px] left-[32px] top-[73.03px] absolute" src="/assets/320-1389.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1390" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                    <div data-layer="40代 女性 / ３ヶ月コース 体重：-9.5kg 体脂肪：-7.5% ウエスト：-11cm" data-node-id="320-1391" className="95kg7511cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">40代 女性 / ３ヶ月コース<br/>体重：-9.5kg<br/>体脂肪：-7.5%<br/>ウエスト：-11cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1392" className="Strong w-[325px] h-[70.19px] left-[396px] top-[259.55px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1393" className="ParagraphBackground w-[325px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="運動と食事制限をご自身で頑張ったが、全く" data-node-id="320-1394" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">運動と食事制限をご自身で頑張ったが、全く</div>
                      <div data-layer="痩せなかったお客様！" data-node-id="320-1395" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">痩せなかったお客様！</div>
                    </div>
                    <div data-layer="着たい服が着れまし" data-node-id="320-1396" className="left-[164.25px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">着たい服が着れまし</div>
                    <div data-layer="た！と嬉しいお言葉♪" data-node-id="320-1397" className="left-0 top-[53.19px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">た！と嬉しいお言葉♪</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1398" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → 諦めていた洋服がまた着れまし&#10;た！" data-node-id="320-1399" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#ff2678] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">諦めていた洋服がまた着れまし<br/>た！</div>
                </div>
                <div data-layer="Container" data-node-id="320-1400" className="Container w-[768px] h-[430px] left-[576px] top-[664.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1401" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA02.webp" data-node-id="320-1402" className="FigureBa02Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.66px] absolute" src="/assets/320-1402.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1403" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[150.38px] absolute border-l-2 border-black">
                    <div data-layer="20代 女性 / ６ヶ月コース 体重：-29.8kg 体脂肪：-14.1% ウエスト：-23cm" data-node-id="320-1404" className="298kg14123cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">20代 女性 / ６ヶ月コース<br/>体重：-29.8kg<br/>体脂肪：-14.1%<br/>ウエスト：-23cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1405" className="Strong w-[330.59px] h-[70.19px] left-[396px] top-[270.75px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1406" className="ParagraphBackground w-[330.59px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="結婚式を控えているお客様が約30kgのダイエ" data-node-id="320-1407" className="30kg left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">結婚式を控えているお客様が約30kgのダイエ</div>
                      <div data-layer="ットに成功" data-node-id="320-1408" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ットに成功</div>
                    </div>
                    <div data-layer="し、 自分史上最高のお身体を手に" data-node-id="320-1409" className="left-[83.13px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">し、 自分史上最高のお身体を手に</div>
                    <div data-layer="入れ結婚式へ♪" data-node-id="320-1410" className="left-0 top-[53.19px] absolute justify-center text-black text-[14.90px] font-light font-['Hiragino_Kaku_Gothic_ProN']">入れ結婚式へ♪</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1411" className="left-[396px] top-[368.53px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → 半年後の結婚式に向けて&#10;本格ダイエット！" data-node-id="320-1412" className="Heading2 left-[396px] top-[45.86px] absolute justify-center text-[#ff2678] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">半年後の結婚式に向けて<br/>本格ダイエット！</div>
                </div>
                <div data-layer="Container" data-node-id="320-1413" className="Container w-[768px] h-[430px] left-[576px] top-[1126.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1414" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA03.webp" data-node-id="320-1415" className="FigureBa03Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1415.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1416" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                    <div data-layer="30代 女性 / ３ヶ月コース 体重：-12.1kg 体脂肪：-8.3% ウエスト：-14cm" data-node-id="320-1417" className="121kg8314cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">30代 女性 / ３ヶ月コース<br/>体重：-12.1kg<br/>体脂肪：-8.3%<br/>ウエスト：-14cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1418" className="Strong w-[331.33px] h-[70.19px] left-[396px] top-[243.88px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1419" className="ParagraphBackground w-[330.58px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="高額エステに通っても効果が出ず、 当院でダ" data-node-id="320-1420" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">高額エステに通っても効果が出ず、 当院でダ</div>
                      <div data-layer="イエットに成功されたお客様。" data-node-id="320-1421" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">イエットに成功されたお客様。 </div>
                    </div>
                    <div data-layer="もっと早く先" data-node-id="320-1422" className="left-[233.83px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">もっと早く先</div>
                    <div data-layer="生に会いたかったと嬉しいお言葉♪" data-node-id="320-1423" className="left-0 top-[53.18px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">生に会いたかったと嬉しいお言葉♪</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1424" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → 高級エステでも痩せなかった…" data-node-id="320-1425" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">高級エステでも痩せなかった…</div>
                </div>
                <div data-layer="Container" data-node-id="320-1426" className="Container w-[768px] h-[430px] left-[576px] top-[1588.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1427" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA04-1.webp" data-node-id="320-1428" className="FigureBa041Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1428.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1429" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                    <div data-layer="30代 女性 / ３ヶ月コース 体重：-14.3kg 体脂肪：-9.1% ウエスト：-17cm" data-node-id="320-1430" className="143kg9117cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">30代 女性 / ３ヶ月コース<br/>体重：-14.3kg<br/>体脂肪：-9.1%<br/>ウエスト：-17cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1431" className="Strong w-[339.47px] h-[70.19px] left-[396px] top-[243.88px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1432" className="ParagraphBackground w-[339.47px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="1年間ジムに通ってもほぼ効果が出ず、 当院で" data-node-id="320-1433" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">1年間ジムに通ってもほぼ効果が出ず、 当院で</div>
                      <div data-layer="ダイエットに成功されたお客様。" data-node-id="320-1434" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットに成功されたお客様。</div>
                    </div>
                    <div data-layer="ダイエット" data-node-id="320-1435" className="left-[245.75px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']"> ダイエット</div>
                    <div data-layer="は運動よりも食事が圧倒的に重要です！" data-node-id="320-1436" className="left-0 top-[53.18px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">は運動よりも食事が圧倒的に重要です！</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1437" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → 痩せてもっと綺麗になりたい！" data-node-id="320-1438" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">痩せてもっと綺麗になりたい！</div>
                </div>
                <div data-layer="Container" data-node-id="320-1439" className="Container w-[768px] h-[430px] left-[576px] top-[2050.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1440" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA05-1.webp" data-node-id="320-1441" className="FigureBa051Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1441.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1442" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                    <div data-layer="40代 女性 / ３ヶ月コース 体重：-10.3kg 体脂肪：-7.1% ウエスト：-12.5cm" data-node-id="320-1443" className="103kg71125cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">40代 女性 / ３ヶ月コース<br/>体重：-10.3kg<br/>体脂肪：-7.1%<br/>ウエスト：-12.5cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1444" className="Strong w-[330.58px] h-[70.19px] left-[396px] top-[243.88px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1445" className="ParagraphBackground w-[325.38px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="産後の骨盤矯正に通ったがほぼ効果が出ず、" data-node-id="320-1446" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">産後の骨盤矯正に通ったがほぼ効果が出ず、</div>
                      <div data-layer="当院でダイエットに成功されたお客様。" data-node-id="320-1447" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">当院でダイエットに成功されたお客様。</div>
                    </div>
                    <div data-layer="断言" data-node-id="320-1448" className="left-[294.13px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']"> 断言</div>
                    <div data-layer="しますが、骨盤矯正だけでは痩せません！" data-node-id="320-1449" className="left-0 top-[53.18px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">しますが、骨盤矯正だけでは痩せません！</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1450" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → 出産前の体重に戻したい！" data-node-id="320-1451" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">出産前の体重に戻したい！</div>
                </div>
                <div data-layer="Container" data-node-id="320-1452" className="Container w-[768px] h-[430px] left-[576px] top-[2512.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1453" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA06.webp" data-node-id="320-1454" className="FigureBa06Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1454.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1455" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                    <div data-layer="40代 女性 / ３ヶ月コース 体重：-9.7kg 体脂肪：-7.7% ウエスト：-13cm" data-node-id="320-1456" className="97kg7713cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">40代 女性 / ３ヶ月コース<br/>体重：-9.7kg<br/>体脂肪：-7.7%<br/>ウエスト：-13cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1457" className="Strong w-[331.70px] h-[70.19px] left-[396px] top-[243.88px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1458" className="ParagraphBackground w-[331.33px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="様々なダイエットをやって痩せても、 暴飲暴" data-node-id="320-1459" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">様々なダイエットをやって痩せても、 暴飲暴</div>
                      <div data-layer="食でリバウンドを繰り返すお客様。" data-node-id="320-1460" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">食でリバウンドを繰り返すお客様。 </div>
                    </div>
                    <div data-layer="リバウン" data-node-id="320-1461" className="left-[266.20px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">リバウン</div>
                    <div data-layer="ドは分子栄養学を理解すれば防げます！" data-node-id="320-1462" className="left-0 top-[53.18px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ドは分子栄養学を理解すれば防げます！</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1463" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → リバウンドを繰り返してきた…" data-node-id="320-1464" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">リバウンドを繰り返してきた…</div>
                </div>
                <div data-layer="Container" data-node-id="320-1465" className="Container w-[768px] h-[430px] left-[576px] top-[2974.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1466" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA07.webp" data-node-id="320-1467" className="FigureBa07Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1467.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1468" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                    <div data-layer="40代 女性 / ３ヶ月コース 体重：-8.7kg 体脂肪：-8.7% ウエスト：-13cm" data-node-id="320-1469" className="87kg8713cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">40代 女性 / ３ヶ月コース<br/>体重：-8.7kg<br/>体脂肪：-8.7%<br/>ウエスト：-13cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1470" className="Strong w-[332.20px] h-[70.19px] left-[396px] top-[243.88px] absolute">
                    <div data-layer="Background" data-node-id="320-1471" className="Background w-[311.38px] h-[21px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="半年間毎日歩いても痩せなかったお客様。" data-node-id="320-1472" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">半年間毎日歩いても痩せなかったお客様。</div>
                    </div>
                    <div data-layer="フ" data-node-id="320-1473" className="left-[311.38px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']"> フ</div>
                    <div data-layer="ルマラソン約３回分で脂肪１kgの燃焼です。 つまり、運動で痩せるのは非効率なのです！" data-node-id="320-1474" className="Kg left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ルマラソン約３回分で脂肪１kgの燃焼です。<br/>つまり、運動で痩せるのは非効率なのです！</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1475" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → 半年歩いても痩せなかった…" data-node-id="320-1476" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">半年歩いても痩せなかった…</div>
                </div>
                <div data-layer="Container" data-node-id="320-1477" className="Container w-[768px] h-[430px] left-[576px] top-[3436.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1478" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA08.webp" data-node-id="320-1479" className="FigureBa08Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.66px] absolute" src="/assets/320-1479.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1480" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                    <div data-layer="60代 女性 / ３ヶ月コース 体重：-12.7kg 体脂肪：-10.7% ウエスト：-17cm" data-node-id="320-1481" className="127kg10717cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">60代 女性 / ３ヶ月コース<br/>体重：-12.7kg<br/>体脂肪：-10.7%<br/>ウエスト：-17cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1482" className="Strong w-[331.70px] h-[70.19px] left-[396px] top-[259.55px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1483" className="ParagraphBackground w-[331.70px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="このままだと怖い病気になるのが怖くて、 当" data-node-id="320-1484" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">このままだと怖い病気になるのが怖くて、 当</div>
                      <div data-layer="院のダイエットに挑戦したお客様。" data-node-id="320-1485" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">院のダイエットに挑戦したお客様。 </div>
                    </div>
                    <div data-layer="ダイエッ" data-node-id="320-1486" className="left-[266.20px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエッ</div>
                    <div data-layer="トの真の目的は健康のためです！" data-node-id="320-1487" className="left-0 top-[53.19px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">トの真の目的は健康のためです！</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1488" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → このままだと怖い病気になりそ&#10;う…" data-node-id="320-1489" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#ff2678] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">このままだと怖い病気になりそ<br/>う…</div>
                </div>
                <div data-layer="Container" data-node-id="320-1490" className="Container w-[768px] h-[430px] left-[576px] top-[3898.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1491" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA09.webp" data-node-id="320-1492" className="FigureBa09Webp w-[339.97px] h-[266.72px] left-[32.02px] top-[73.63px] absolute" src="/assets/320-1492.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1493" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                    <div data-layer="30代 男性 / ３ヶ月コース 体重：-12.7kg 体脂肪：-5.7% ウエスト：-15.5cm" data-node-id="320-1494" className="127kg57155cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">30代 男性 / ３ヶ月コース<br/>体重：-12.7kg<br/>体脂肪：-5.7%<br/>ウエスト：-15.5cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1495" className="Strong w-[331.33px] h-[70.19px] left-[396px] top-[259.55px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1496" className="ParagraphBackground w-[313.08px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#b7e3ff]/0 to-[#b7e3ff]">
                      <div data-layer="健康診断の数値が悪く、医師に 「痩せなさ" data-node-id="320-1497" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">健康診断の数値が悪く、医師に 「痩せなさ</div>
                      <div data-layer="い」と言われ続けたお客様。" data-node-id="320-1498" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">い」と言われ続けたお客様。 </div>
                    </div>
                    <div data-layer="ダイエットは病" data-node-id="320-1499" className="left-[217.08px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットは病</div>
                    <div data-layer="気の予防に繋がります！" data-node-id="320-1500" className="left-0 top-[53.19px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">気の予防に繋がります！</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1501" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → 健康診断の数値が悪くダイエッ&#10;ト" data-node-id="320-1502" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#3d79d5] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">健康診断の数値が悪くダイエッ<br/>ト</div>
                </div>
                <div data-layer="Container" data-node-id="320-1503" className="Container w-[768px] h-[430px] left-[576px] top-[4360.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1504" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA10.webp" data-node-id="320-1505" className="FigureBa10Webp w-[339.97px] h-[267.45px] left-[32.02px] top-[73.27px] absolute" src="/assets/320-1505.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1506" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                    <div data-layer="50代 男性 / ３ヶ月コース 体重：-11.7kg 体脂肪：-5.5% ウエスト：-15cm" data-node-id="320-1507" className="117kg5515cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">50代 男性 / ３ヶ月コース<br/>体重：-11.7kg<br/>体脂肪：-5.5%<br/>ウエスト：-15cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1508" className="Strong w-[330.58px] h-[70.19px] left-[396px] top-[259.55px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1509" className="ParagraphBackground w-[330.20px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#b7e3ff]/0 to-[#b7e3ff]">
                      <div data-layer="健康的な身体になって長生きしたくて、 当院" data-node-id="320-1510" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">健康的な身体になって長生きしたくて、 当院</div>
                      <div data-layer="のダイエットに挑戦されたお客様。" data-node-id="320-1511" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">のダイエットに挑戦されたお客様。 </div>
                    </div>
                    <div data-layer="生活習慣" data-node-id="320-1512" className="left-[266.58px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">生活習慣</div>
                    <div data-layer="病を改善して健康的になりませんか？" data-node-id="320-1513" className="left-0 top-[53.19px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">病を改善して健康的になりませんか？</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1514" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → 長生きしたくてダイエットに挑&#10;戦" data-node-id="320-1515" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#3d79d5] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">長生きしたくてダイエットに挑<br/>戦</div>
                </div>
                <div data-layer="Container" data-node-id="320-1516" className="Container w-[768px] h-[430px] left-[576px] top-[4822.19px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="320-1517" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → BA11.webp" data-node-id="320-1518" className="FigureBa11Webp w-[339.98px] h-[267.14px] left-[32px] top-[73.42px] absolute" src="/assets/320-1518.webp" />
                  <div data-layer="VerticalBorder" data-node-id="320-1519" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                    <div data-layer="30代 男性 / ６ヶ月コース 体重：-20.2kg 体脂肪：-13.5% ウエスト：-19cm" data-node-id="320-1520" className="202kg13519cm left-[12px] top-[4px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">30代 男性 / ６ヶ月コース<br/>体重：-20.2kg<br/>体脂肪：-13.5%<br/>ウエスト：-19cm</div>
                  </div>
                  <div data-layer="Strong" data-node-id="320-1521" className="Strong w-[331.33px] h-[70.19px] left-[396px] top-[259.55px] absolute">
                    <div data-layer="Paragraph+Background" data-node-id="320-1522" className="ParagraphBackground w-[330.95px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#b7e3ff]/0 to-[#b7e3ff]">
                      <div data-layer="「女性にモテたい」という想いで、 当院のダ" data-node-id="320-1523" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">「女性にモテたい」という想いで、 当院のダ</div>
                      <div data-layer="イエットに挑戦されたお客様。" data-node-id="320-1524" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">イエットに挑戦されたお客様。</div>
                    </div>
                    <div data-layer="異性にモテる" data-node-id="320-1525" className="left-[229.38px] top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']"> 異性にモテる</div>
                    <div data-layer="ってとっても大事ですよね♪" data-node-id="320-1526" className="left-0 top-[53.19px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ってとっても大事ですよね♪</div>
                  </div>
                  <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1527" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※個人の感想であり成果を保証するものではありません。</div>
                  <div data-layer="Heading 2 → Strong → ダイエットに成功して彼女をつ&#10;くる" data-node-id="320-1528" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#3d79d5] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットに成功して彼女をつ<br/>くる</div>
                </div>
                <div data-layer="Background" data-node-id="320-1529" className="Background w-[1920px] h-[5284.19px] left-[1px] top-[-8.45px] absolute bg-[#f7f6eb]">
                  <div data-layer="Strong → 北名古屋市" data-node-id="320-1530" className="Strong left-[813px] top-[40.55px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-bold font-['Noto_Sans_JP']">戸塚区</div>
                  <div data-layer="Strong" data-node-id="320-1531" className="Strong w-[374.38px] h-[122.13px] left-[781.69px] top-[39px] absolute">
                    <div data-layer="で" data-node-id="320-1532" className="left-[110.22px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-bold font-['Noto_Sans_JP']">で</div>
                    <div data-layer="Background" data-node-id="320-1533" className="Background w-[237.95px] h-8 left-[136.42px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="話題のダイエット！" data-node-id="320-1534" className="left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-bold font-['Noto_Sans_JP']">話題のダイエット！</div>
                    </div>
                    <div data-layer="お客様の声&amp;ビフォアアフター 一部を公開します！" data-node-id="320-1535" className="left-0 top-[48.07px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-bold font-['Noto_Sans_JP']">お客様の声&ビフォアアフター<br/>一部を公開します！</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1536" className="Container w-[768px] h-[430px] left-[576px] top-[202.19px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1537" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA01.webp" data-node-id="320-1538" className="FigureBa01Webp w-[339.98px] h-[267.91px] left-[32px] top-[73.03px] absolute" src="/assets/320-1538.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1539" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                      <div data-layer="40代 女性 / ３ヶ月コース 体重：-9.5kg 体脂肪：-7.5% ウエスト：-11cm" data-node-id="320-1540" className="95kg7511cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">40代 女性 / ３ヶ月コース<br/>体重：-9.5kg<br/>体脂肪：-7.5%<br/>ウエスト：-11cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1541" className="Strong w-[336px] h-[83px] left-[400px] top-[257.81px] absolute">
                      <div data-layer="Paragraph+Background" data-node-id="320-1542" className="ParagraphBackground w-[325px] h-[15px] left-0 top-[20px] absolute bg-gradient-to-b from-[#fcf69f] to-[#fcf69f]/0" />
                      <div data-layer="Paragraph+Background" data-node-id="320-1543" className="ParagraphBackground w-[158px] h-[15px] left-0 top-[44px] absolute bg-gradient-to-b from-[#fcf69f] to-[#fcf69f]/0" />
                      <div data-layer="運動と食事制限をご自身で頑張ったが、全く" data-node-id="320-1544" className="left-0 top-[11px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">運動と食事制限をご自身で頑張ったが、全く</div>
                      <div data-layer="痩せなかったお客様！着たい服がきれました！" data-node-id="320-1545" className="left-0 top-[39px] absolute justify-center text-black text-base font-medium font-['Noto_Sans_JP']">痩せなかったお客様！着たい服がきれました！</div>
                    </div>
                    <div data-layer="と嬉しいお言葉♪" data-node-id="320-1546" className="left-[400px] top-[320.81px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">と嬉しいお言葉♪</div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1547" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → Strong → 諦めていた洋服がまた着れまし&#10;た！" data-node-id="320-1548" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#ff2678] text-[22.40px] font-bold font-['Noto_Sans_JP']">諦めていた洋服がまた着れまし<br/>た！</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1549" className="Container w-[768px] h-[430px] left-[576px] top-[664px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1550" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA02.webp" data-node-id="320-1551" className="FigureBa02Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.66px] absolute" src="/assets/320-1551.webp" />
                    <div data-layer="Paragraph+Background" data-node-id="320-1552" className="ParagraphBackground w-[331px] h-[30px] left-[396px] top-[257.81px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]" />
                    <div data-layer="Paragraph+Background" data-node-id="320-1553" className="ParagraphBackground w-[103px] h-[30px] left-[396px] top-[285.81px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]" />
                    <div data-layer="VerticalBorder" data-node-id="320-1554" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[150.38px] absolute border-l-2 border-black">
                      <div data-layer="20代 女性 / ６ヶ月コース 体重：-29.8kg 体脂肪：-14.1% ウエスト：-23cm" data-node-id="320-1555" className="298kg14123cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">20代 女性 / ６ヶ月コース<br/>体重：-29.8kg<br/>体脂肪：-14.1%<br/>ウエスト：-23cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1556" className="Strong w-[330.59px] h-[70.19px] left-[396px] top-[266px] absolute">
                      <div data-layer="結婚式を控えているお客様が約30kgのダイエ" data-node-id="320-1557" className="30kg left-[2px] top-[-8px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">結婚式を控えているお客様が約30kgのダイエ</div>
                      <div data-layer="ットに成功し、自分史上最高のお身体を手に入れ結婚式へ♪" data-node-id="320-1558" className="left-[2px] top-[31px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">ットに成功し、自分史上最高のお身体を手に入れ結婚式へ♪</div>
                    </div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1559" className="left-[396px] top-[368.53px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → 半年後の結婚式に向けて&#10;本格ダイエット！" data-node-id="320-1560" className="Heading2 left-[396px] top-[45.86px] absolute justify-center text-[#ff2678] text-[22.40px] font-bold font-['Noto_Sans_JP']">半年後の結婚式に向けて<br/>本格ダイエット！</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1561" className="Container w-[768px] h-[430px] left-[576px] top-[1126.19px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1562" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA03.webp" data-node-id="320-1563" className="FigureBa03Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1563.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1564" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                      <div data-layer="30代 女性 / ３ヶ月コース 体重：-12.1kg 体脂肪：-8.3% ウエスト：-14cm" data-node-id="320-1565" className="121kg8314cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">30代 女性 / ３ヶ月コース<br/>体重：-12.1kg<br/>体脂肪：-8.3%<br/>ウエスト：-14cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1566" className="Strong w-[331.33px] h-[70.19px] left-[396px] top-[248.81px] absolute">
                      <div data-layer="Paragraph+Background" data-node-id="320-1567" className="ParagraphBackground w-[215px] h-[17px] left-0 top-[33px] absolute bg-gradient-to-b from-[#fcf69f] to-[#fcf69f]/0" />
                      <div data-layer="Paragraph+Background" data-node-id="320-1568" className="ParagraphBackground w-[330.58px] h-[46.59px] left-0 top-[-31.52px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                        <div data-layer="高額エステに通っても効果が出ず、 当院でダ" data-node-id="320-1569" className="left-[2px] top-[29.52px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">高額エステに通っても効果が出ず、 当院でダ</div>
                      </div>
                      <div data-layer="生に会いたかったと嬉しいお言葉♪" data-node-id="320-1570" className="left-0 top-[53.18px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">生に会いたかったと嬉しいお言葉♪</div>
                      <div data-layer="イエットに成功されたお客様。もっと早く先" data-node-id="320-1571" className="left-0 top-[25px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">イエットに成功されたお客様。もっと早く先 </div>
                    </div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1572" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → Strong → 高級エステでも痩せなかった…" data-node-id="320-1573" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-bold font-['Noto_Sans_JP']">高級エステでも痩せなかった…</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1574" className="Container w-[768px] h-[430px] left-[576px] top-[1588px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1575" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA04-1.webp" data-node-id="320-1576" className="FigureBa041Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1576.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1577" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                      <div data-layer="30代 女性 / ３ヶ月コース 体重：-14.3kg 体脂肪：-9.1% ウエスト：-17cm" data-node-id="320-1578" className="143kg9117cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">30代 女性 / ３ヶ月コース<br/>体重：-14.3kg<br/>体脂肪：-9.1%<br/>ウエスト：-17cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1579" className="Strong w-[339px] h-[84px] left-[396px] top-[242px] absolute" />
                    <div data-layer="は運動よりも食事が圧倒的に重要です！" data-node-id="320-1580" className="left-[396px] top-[302px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">は運動よりも食事が圧倒的に重要です！</div>
                    <div data-layer="Paragraph+Background" data-node-id="320-1581" className="ParagraphBackground w-[233px] h-[17px] left-[397px] top-[275px] absolute bg-gradient-to-b from-[#fcf69f] to-[#fcf69f]/0" />
                    <div data-layer="ダイエットに成功されたお客様。ダイエット" data-node-id="320-1582" className="left-[398px] top-[269px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">ダイエットに成功されたお客様。ダイエット</div>
                    <div data-layer="Paragraph+Background" data-node-id="320-1583" className="ParagraphBackground w-[332px] h-[46px] left-[396px] top-[213.36px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]" />
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1584" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="1年間ジムに通ってもほぼ効果が出ず、 当院で" data-node-id="320-1585" className="left-[397px] top-[242px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">1年間ジムに通ってもほぼ効果が出ず、 当院で</div>
                    <div data-layer="Heading 2 → Strong → 痩せてもっと綺麗になりたい！" data-node-id="320-1586" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-bold font-['Noto_Sans_JP']">痩せてもっと綺麗になりたい！</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1587" className="Container w-[768px] h-[430px] left-[576px] top-[2050px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1588" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA05-1.webp" data-node-id="320-1589" className="FigureBa051Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1589.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1590" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                      <div data-layer="40代 女性 / ３ヶ月コース 体重：-10.3kg 体脂肪：-7.1% ウエスト：-12.5cm" data-node-id="320-1591" className="103kg71125cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">40代 女性 / ３ヶ月コース<br/>体重：-10.3kg<br/>体脂肪：-7.1%<br/>ウエスト：-12.5cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1592" className="Strong w-[330.58px] h-[70.19px] left-[396px] top-[244px] absolute">
                      <div data-layer="Paragraph+Background" data-node-id="320-1593" className="ParagraphBackground w-[331px] h-[30px] left-0 top-[-11.52px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                        <div data-layer="産後の骨盤矯正に通ったがほぼ効果が出ず、" data-node-id="320-1594" className="left-0 top-[13px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">産後の骨盤矯正に通ったがほぼ効果が出ず、</div>
                      </div>
                      <div data-layer="Paragraph+Background" data-node-id="320-1595" className="ParagraphBackground w-[279px] h-3.5 left-0 top-[29px] absolute bg-[#fcf69f]" />
                      <div data-layer="当院でダイエットに成功されたお客様。断言" data-node-id="320-1596" className="left-0 top-[26px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">当院でダイエットに成功されたお客様。断言</div>
                      <div data-layer="しますが、骨盤矯正だけでは痩せません！" data-node-id="320-1597" className="left-0 top-[53.18px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">しますが、骨盤矯正だけでは痩せません！</div>
                    </div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1598" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → Strong → 出産前の体重に戻したい！" data-node-id="320-1599" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-bold font-['Noto_Sans_JP']">出産前の体重に戻したい！</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1600" className="Container w-[768px] h-[430px] left-[576px] top-[2512px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1601" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA06.webp" data-node-id="320-1602" className="FigureBa06Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1602.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1603" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                      <div data-layer="40代 女性 / ３ヶ月コース 体重：-9.7kg 体脂肪：-7.7% ウエスト：-13cm" data-node-id="320-1604" className="97kg7713cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">40代 女性 / ３ヶ月コース<br/>体重：-9.7kg<br/>体脂肪：-7.7%<br/>ウエスト：-13cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1605" className="Strong w-[332px] h-[82px] left-[396px] top-[244px] absolute">
                      <div data-layer="Paragraph+Background" data-node-id="320-1606" className="ParagraphBackground w-[331px] h-[19px] left-0 top-[8.93px] absolute bg-[#fcf69f]" />
                      <div data-layer="Paragraph+Background" data-node-id="320-1607" className="ParagraphBackground w-[248px] h-[19px] left-0 top-[36.93px] absolute bg-[#fcf69f]" />
                      <div data-layer="ドは分子栄養学を理解すれば防げます！" data-node-id="320-1608" className="left-0 top-[61.81px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">ドは分子栄養学を理解すれば防げます！</div>
                      <div data-layer="食でリバウンドを繰り返すお客様。リバウン" data-node-id="320-1609" className="left-0 top-[36px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">食でリバウンドを繰り返すお客様。リバウン </div>
                      <div data-layer="様々なダイエットをやって痩せても、 暴飲暴" data-node-id="320-1610" className="left-[2px] top-[9px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">様々なダイエットをやって痩せても、 暴飲暴</div>
                    </div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1611" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → Strong → リバウンドを繰り返してきた…" data-node-id="320-1612" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-bold font-['Noto_Sans_JP']">リバウンドを繰り返してきた…</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1613" className="Container w-[768px] h-[430px] left-[592px] top-[2946px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1614" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA07.webp" data-node-id="320-1615" className="FigureBa07Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.67px] absolute" src="/assets/320-1615.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1616" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[123.50px] absolute border-l-2 border-black">
                      <div data-layer="40代 女性 / ３ヶ月コース 体重：-8.7kg 体脂肪：-8.7% ウエスト：-13cm" data-node-id="320-1617" className="87kg8713cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">40代 女性 / ３ヶ月コース<br/>体重：-8.7kg<br/>体脂肪：-8.7%<br/>ウエスト：-13cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1618" className="Strong w-[332.20px] h-[70.19px] left-[392px] top-[243px] absolute">
                      <div data-layer="Background" data-node-id="320-1619" className="Background w-[311px] h-3.5 left-0 top-[7px] absolute bg-[#fcf69f]" />
                      <div data-layer="ルマラソン約３回分で脂肪１kgの燃焼です。 つまり、運動で痩せるのは非効率なのです！" data-node-id="320-1620" className="Kg left-0 top-[27px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">ルマラソン約３回分で脂肪１kgの燃焼です。<br/>つまり、運動で痩せるのは非効率なのです！</div>
                      <div data-layer="半年間毎日歩いても痩せなかったお客様。フ" data-node-id="320-1621" className="left-0 top-[-0.81px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">半年間毎日歩いても痩せなかったお客様。フ</div>
                    </div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1622" className="left-[396px] top-[341.66px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → Strong → 半年歩いても痩せなかった…" data-node-id="320-1623" className="Heading2Strong left-[396px] top-[72.75px] absolute justify-center text-[#ff2678] text-[22.40px] font-bold font-['Noto_Sans_JP']">半年歩いても痩せなかった…</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1624" className="Container w-[768px] h-[430px] left-[576px] top-[3436.19px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1625" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA08.webp" data-node-id="320-1626" className="FigureBa08Webp w-[339.98px] h-[266.66px] left-[32px] top-[73.66px] absolute" src="/assets/320-1626.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1627" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                      <div data-layer="60代 女性 / ３ヶ月コース 体重：-12.7kg 体脂肪：-10.7% ウエスト：-17cm" data-node-id="320-1628" className="127kg10717cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">60代 女性 / ３ヶ月コース<br/>体重：-12.7kg<br/>体脂肪：-10.7%<br/>ウエスト：-17cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1629" className="Strong w-[331.70px] h-[70.19px] left-[396px] top-[259.55px] absolute">
                      <div data-layer="トの真の目的は健康のためです！" data-node-id="320-1630" className="left-0 top-[53.19px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">トの真の目的は健康のためです！</div>
                      <div data-layer="Paragraph+Background" data-node-id="320-1631" className="ParagraphBackground w-[246px] h-[47px] left-[-2px] top-[-0.19px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]" />
                      <div data-layer="Paragraph+Background" data-node-id="320-1632" className="ParagraphBackground w-[331.70px] h-[46.59px] left-[-2px] top-[-28.19px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]" />
                      <div data-layer="院のダイエットに挑戦したお客様。 ダイエッ" data-node-id="320-1633" className="left-[2px] top-[27.26px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">院のダイエットに挑戦したお客様。 ダイエッ</div>
                      <div data-layer="このままだと怖い病気になるのが怖くて、 当" data-node-id="320-1634" className="left-[-2px] top-[1.81px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">このままだと怖い病気になるのが怖くて、 当</div>
                    </div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1635" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → Strong → このままだと怖い病気になりそ&#10;う…" data-node-id="320-1636" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#ff2678] text-[22.40px] font-bold font-['Noto_Sans_JP']">このままだと怖い病気になりそ<br/>う…</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1637" className="Container w-[768px] h-[430px] left-[576px] top-[3898.19px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1638" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA09.webp" data-node-id="320-1639" className="FigureBa09Webp w-[339.97px] h-[266.72px] left-[32.02px] top-[73.63px] absolute" src="/assets/320-1639.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1640" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                      <div data-layer="30代 男性 / ３ヶ月コース 体重：-12.7kg 体脂肪：-5.7% ウエスト：-15.5cm" data-node-id="320-1641" className="127kg57155cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">30代 男性 / ３ヶ月コース<br/>体重：-12.7kg<br/>体脂肪：-5.7%<br/>ウエスト：-15.5cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1642" className="Strong w-[331.33px] h-[70.19px] left-[405px] top-[261.81px] absolute">
                      <div data-layer="Paragraph+Background" data-node-id="320-1643" className="ParagraphBackground w-44 h-3 left-0 top-[35px] absolute bg-[#b7e3ff]" />
                      <div data-layer="予防に繋がります！" data-node-id="320-1644" className="left-0 top-[53px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">予防に繋がります！</div>
                      <div data-layer="Paragraph+Background" data-node-id="320-1645" className="ParagraphBackground w-[327px] h-[11px] left-0 top-[12px] absolute bg-[#b7e3ff]" />
                      <div data-layer="と言われ続けたお客様。 ダイエットは病気の" data-node-id="320-1646" className="left-0 top-[30px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">と言われ続けたお客様。 ダイエットは病気の</div>
                      <div data-layer="健康診断の数値が悪く、医師に「痩せなさい」" data-node-id="320-1647" className="left-0 top-[6px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">健康診断の数値が悪く、医師に「痩せなさい」</div>
                    </div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1648" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → Strong → 健康診断の数値が悪くダイエッ&#10;ト" data-node-id="320-1649" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#3d79d5] text-[22.40px] font-bold font-['Noto_Sans_JP']">健康診断の数値が悪くダイエッ<br/>ト</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1650" className="Container w-[768px] h-[430px] left-[576px] top-[4360.19px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1651" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA10.webp" data-node-id="320-1652" className="FigureBa10Webp w-[339.97px] h-[267.45px] left-[32.02px] top-[73.27px] absolute" src="/assets/320-1652.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1653" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                      <div data-layer="50代 男性 / ３ヶ月コース 体重：-11.7kg 体脂肪：-5.5% ウエスト：-15cm" data-node-id="320-1654" className="117kg5515cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">50代 男性 / ３ヶ月コース<br/>体重：-11.7kg<br/>体脂肪：-5.5%<br/>ウエスト：-15cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1655" className="Strong w-[331px] h-[77px] left-[396px] top-[249.81px] absolute">
                      <div data-layer="Paragraph+Background" data-node-id="320-1656" className="ParagraphBackground w-[253px] h-[18px] left-[-1px] top-[41px] absolute bg-gradient-to-b from-[#b7e3ff] to-[#b7e3ff]/0" />
                      <div data-layer="病を改善して健康的になりませんか？" data-node-id="320-1657" className="left-[1px] top-[60px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">病を改善して健康的になりませんか？</div>
                      <div data-layer="Paragraph+Background" data-node-id="320-1658" className="ParagraphBackground w-[330px] h-[17px] left-[-1px] top-[14px] absolute bg-gradient-to-b from-[#b7e3ff] to-[#b7e3ff]/0">
                        <div data-layer="健康的な身体になって長生きしたくて、 当院" data-node-id="320-1659" className="left-[2px] top-[-8px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">健康的な身体になって長生きしたくて、 当院</div>
                      </div>
                      <div data-layer="のダイエットに挑戦されたお客様。 生活習慣" data-node-id="320-1660" className="left-[-1px] top-[32px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">のダイエットに挑戦されたお客様。 生活習慣</div>
                    </div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1661" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → Strong → 長生きしたくてダイエットに挑&#10;戦" data-node-id="320-1662" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#3d79d5] text-[22.40px] font-bold font-['Noto_Sans_JP']">長生きしたくてダイエットに挑<br/>戦</div>
                  </div>
                  <div data-layer="Container" data-node-id="320-1663" className="Container w-[768px] h-[430px] left-[576px] top-[4822.19px] absolute overflow-hidden">
                    <div data-layer="Background" data-node-id="320-1664" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                    <img data-layer="Figure → BA11.webp" data-node-id="320-1665" className="FigureBa11Webp w-[339.98px] h-[267.14px] left-[32px] top-[73.42px] absolute" src="/assets/320-1665.webp" />
                    <div data-layer="VerticalBorder" data-node-id="320-1666" className="Verticalborder w-[340px] h-[102.38px] left-[396px] top-[139.17px] absolute border-l-2 border-black">
                      <div data-layer="30代 男性 / ６ヶ月コース 体重：-20.2kg 体脂肪：-13.5% ウエスト：-19cm" data-node-id="320-1667" className="202kg13519cm left-[12px] top-[4px] absolute justify-center text-black text-base font-medium font-['YuGothic']">30代 男性 / ６ヶ月コース<br/>体重：-20.2kg<br/>体脂肪：-13.5%<br/>ウエスト：-19cm</div>
                    </div>
                    <div data-layer="Strong" data-node-id="320-1668" className="Strong w-[331.33px] h-[70.19px] left-[400px] top-[257.81px] absolute">
                      <div data-layer="ってとっても大事ですよね♪" data-node-id="320-1669" className="left-0 top-[53.19px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">ってとっても大事ですよね♪</div>
                      <div data-layer="Paragraph+Background" data-node-id="320-1670" className="ParagraphBackground w-[216px] h-[15px] left-0 top-[32px] absolute bg-[#b7e3ff]" />
                      <div data-layer="Paragraph+Background" data-node-id="320-1671" className="ParagraphBackground w-[322px] h-[18px] left-0 top-0 absolute bg-[#b7e3ff]">
                        <div data-layer="「女性にモテたい」という想いで、 当院のダ" data-node-id="320-1672" className="left-[-7px] top-0 absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">「女性にモテたい」という想いで、 当院のダ</div>
                      </div>
                      <div data-layer="イエットに挑戦されたお客様。異性にモテる" data-node-id="320-1673" className="left-0 top-[30px] absolute justify-center text-black text-base font-bold font-['Noto_Sans_JP']">イエットに挑戦されたお客様。異性にモテる</div>
                    </div>
                    <div data-layer="※個人の感想であり成果を保証するものではありません。" data-node-id="320-1674" className="left-[396px] top-[357.33px] absolute justify-center text-black text-xs font-medium font-['YuGothic']">※個人の感想であり成果を保証するものではありません。</div>
                    <div data-layer="Heading 2 → Strong → ダイエットに成功して彼女をつ&#10;くる" data-node-id="320-1675" className="Heading2Strong left-[396px] top-[57.06px] absolute justify-center text-[#3d79d5] text-[22.40px] font-bold font-['Noto_Sans_JP']">ダイエットに成功して彼女をつ<br/>くる</div>
                  </div>
                  <img data-layer="Background (4) 1" data-node-id="320-1676" className="Background41 w-[1918px] h-[5280px] left-[-10px] top-0 absolute" src="/assets/320-1676.webp" />
                </div>
              </div>
            <div data-layer="Background" data-node-id="320-1677" className="Background w-[1920px] h-[581.08px] left-[0.00px] top-[19030.64px] absolute bg-[#f7f7f7]">
                <div data-layer="Strong" data-node-id="320-1678" className="Strong w-[484.11px] h-[190.84px] left-[576px] top-[356.09px] absolute">
                  <div data-layer="しかし、当院では期間中に痩せるのはもちろん、それ以降も リバウンドせずにどうやったらお客様が継続してずっと痩せ 続けられるのか？" data-node-id="320-1679" className="left-0 top-0 absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">しかし、当院では期間中に痩せるのはもちろん、それ以降も<br/>リバウンドせずにどうやったらお客様が継続してずっと痩せ<br/>続けられるのか？</div>
                  <div data-layer="Paragraph+Background" data-node-id="320-1680" className="ParagraphBackground w-[481.23px] h-[80.28px] left-0 top-[110.57px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="理想の体型をキープできるのか？にも念頭を置いているの" data-node-id="320-1681" className="left-[2px] top-[2px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">理想の体型をキープできるのか？にも念頭を置いているの</div>
                    <div data-layer="で、『期間が終了してからも、さらに体重が落ちました！』 という声が、続出しているのです。" data-node-id="320-1682" className="left-0 top-[30.14px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">で、『期間が終了してからも、さらに体重が落ちました！』<br/>という声が、続出しているのです。</div>
                  </div>
                </div>
                <img data-layer="Figure → 191.webp" data-node-id="320-1683" className="Figure191Webp w-[248px] h-[165.33px] left-[1096px] top-[352.09px] absolute rounded-full" src="/assets/320-1683.webp" />
                <div data-layer="Strong" data-node-id="320-1684" className="Strong w-[761.67px] h-[273.25px] left-[576px] top-[37px] absolute">
                  <div data-layer="本当にこの人たちみたいに、私でも痩せられるの？他とは一体何が違うんですか！" data-node-id="320-1685" className="left-0 top-0 absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">本当にこの人たちみたいに、私でも痩せられるの？他とは一体何が違うんですか！</div>
                  <div data-layer="当院では、" data-node-id="320-1686" className="left-0 top-[63.31px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">当院では、</div>
                  <div data-layer="Background" data-node-id="320-1687" className="Background w-[472.42px] h-6 left-[89.80px] top-[61.31px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="Mark → 【ただ『痩せる』だけでなく、健康的で魅力的なカラダ】" data-node-id="320-1688" className="Mark left-[2px] top-[2px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">【ただ『痩せる』だけでなく、健康的で魅力的なカラダ】</div>
                  </div>
                  <div data-layer="を目指すことをコンセプ" data-node-id="320-1689" className="left-[562.22px] top-[63.31px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">を目指すことをコンセプ</div>
                  <div data-layer="トに、その場しのぎの一時的なダイエットではなく、" data-node-id="320-1690" className="left-0 top-[94.97px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">トに、その場しのぎの一時的なダイエットではなく、</div>
                  <div data-layer="Background" data-node-id="320-1691" className="Background w-[759.67px] h-[55.66px] left-0 top-[92.97px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="Mark" data-node-id="320-1692" className="Mark w-[759.67px] h-[51.66px] left-0 top-[2px] absolute">
                      <div data-layer="永続的に理想の体型でいられる根本改善" data-node-id="320-1693" className="left-[436.48px] top-0 absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">永続的に理想の体型でいられる根本改善</div>
                      <div data-layer="ダイエット" data-node-id="320-1694" className="left-0 top-[31.66px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエット</div>
                    </div>
                  </div>
                  <div data-layer="を行なっております。" data-node-id="320-1695" className="left-[93.03px] top-[126.63px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">を行なっております。</div>
                  <div data-layer="一般的なジムやエステなどは『通院中やコース期間にいかに痩せられるか？』だけを念頭に置 いてるから、期間が終了したあとは、途端に痩せなくなり、逆にリバウンドが起こってしまっ たりするのです。" data-node-id="320-1696" className="left-0 top-[189.94px] absolute justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">一般的なジムやエステなどは『通院中やコース期間にいかに痩せられるか？』だけを念頭に置<br/>いてるから、期間が終了したあとは、途端に痩せなくなり、逆にリバウンドが起こってしまっ<br/>たりするのです。</div>
                </div>
              </div>
            <div data-layer="Background" data-node-id="320-1697" className="Background w-[1920px] h-[761.59px] left-[0.00px] top-[19611.72px] absolute bg-[#f7f7f7]">
                <img data-layer="Figure → worries02-1024x640.jpg" data-node-id="320-1698" className="FigureWorries021024x640Jpg w-[768px] h-[480px] left-[576px] top-[32px] absolute" src="/assets/320-1698.webp" />
                <div data-layer="VerticalBorder" data-node-id="320-1699" className="Verticalborder w-[768px] h-[28.80px] left-[576px] top-[544px] absolute border-l-2 border-[#333333]">
                  <div data-layer="Strong → 他にも" data-node-id="320-1700" className="Strong left-[12px] top-[5px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">他にも…</div>
                </div>
                <div data-layer="List" data-node-id="320-1701" className="List w-[768px] h-20 left-[576px] top-[588.80px] absolute">
                  <div data-layer="Item" data-node-id="320-1702" className="Item w-[764px] h-6 left-[4px] top-0 absolute">
                    <div data-layer="Strong" data-node-id="320-1703" className="Strong w-[328.88px] h-[21px] left-[24px] top-[1px] absolute">
                      <div data-layer="結婚式など、" data-node-id="320-1704" className="left-0 top-[2px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">結婚式など、</div>
                      <div data-layer="Mark" data-node-id="320-1705" className="Mark w-[232.13px] h-[21px] left-[96.75px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                        <div data-layer="特別なイベントまでに痩せたい" data-node-id="320-1706" className="left-[2px] top-[2px] absolute justify-center text-[#ff2678] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">特別なイベントまでに痩せたい</div>
                      </div>
                    </div>
                    <div data-layer="Icon" data-node-id="320-1707" className="Icon w-4 h-4 left-0 top-[4px] absolute">
                      <img data-layer="Vector" data-node-id="320-1708" className="Vector w-[14.34px] h-[10.91px] left-[0.83px] top-[2.33px] absolute" src="/assets/320-1708.svg" />
                    </div>
                  </div>
                  <div data-layer="Item" data-node-id="320-1709" className="Item w-[764px] h-6 left-[4px] top-[28px] absolute">
                    <div data-layer="Strong" data-node-id="320-1710" className="Strong w-[295px] h-[21px] left-[24px] top-[1px] absolute">
                      <div data-layer="​生活習慣病で" data-node-id="320-1711" className="left-0 top-[2px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">​生活習慣病で</div>
                      <div data-layer="Mark" data-node-id="320-1712" className="Mark w-[198.63px] h-[21px] left-[96.38px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                        <div data-layer="怖い病気にかかるのが不安" data-node-id="320-1713" className="left-[2px] top-[2px] absolute justify-center text-[#ff2678] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">怖い病気にかかるのが不安</div>
                      </div>
                    </div>
                    <div data-layer="Icon" data-node-id="320-1714" className="Icon w-4 h-4 left-0 top-[4px] absolute">
                      <img data-layer="Vector" data-node-id="320-1715" className="Vector w-[14.34px] h-[10.91px] left-[0.83px] top-[2.33px] absolute" src="/assets/320-1715.svg" />
                    </div>
                  </div>
                  <div data-layer="Item" data-node-id="320-1716" className="Item w-[764px] h-6 left-[4px] top-[56px] absolute">
                    <div data-layer="Strong" data-node-id="320-1717" className="Strong w-[409.63px] h-[21px] left-[24px] top-[1px] absolute">
                      <div data-layer="​綺麗に痩せて、" data-node-id="320-1718" className="left-0 top-[2px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">​綺麗に痩せて、</div>
                      <div data-layer="Mark" data-node-id="320-1719" className="Mark w-[296.50px] h-[21px] left-[113.13px] top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                        <div data-layer="毎日を心の底から思いっきり楽しみたい" data-node-id="320-1720" className="left-[2px] top-[2px] absolute justify-center text-[#ff2678] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">毎日を心の底から思いっきり楽しみたい</div>
                      </div>
                    </div>
                    <div data-layer="Icon" data-node-id="320-1721" className="Icon w-4 h-4 left-0 top-[4px] absolute">
                      <img data-layer="Vector" data-node-id="320-1722" className="Vector w-[14.34px] h-[10.91px] left-[0.83px] top-[2.33px] absolute" src="/assets/320-1722.svg" />
                    </div>
                  </div>
                </div>
                <div data-layer="Strong → 以上に1つでも当てはまったら、当院のダイエットがお役に立てます！" data-node-id="320-1723" className="Strong1 left-[703.42px] top-[705.80px] absolute text-center justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">以上に1つでも当てはまったら、当院のダイエットがお役に立てます！</div>
              </div>
            <div data-layer="Heading 2 → いきなり整体を受けに行くのは&#10;勇気がいる事だと思います。" data-node-id="320-1731" className="Heading2 left-[799.23px] top-[10993.58px] absolute text-center justify-center text-[#333333] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">いきなり整体を受けに行くのは<br/>勇気がいる事だと思います。</div>
            <div data-layer="Strong" data-node-id="320-1732" className="Strong w-[334.47px] h-5 left-[792.77px] top-[11790.88px] absolute">
                <div data-layer="「ダイエット」" data-node-id="320-1733" className="left-0 top-[-9px] absolute text-center justify-center text-[#ff2678] text-[28.20px] font-light font-['Hiragino_Kaku_Gothic_ProN']">「ダイエット」</div>
                <div data-layer="と言っても、" data-node-id="320-1734" className="left-[200.40px] top-[-4px] absolute text-center justify-center text-[#333333] text-[22px] font-light font-['Hiragino_Kaku_Gothic_ProN']">と言っても、</div>
              </div>
            <div data-layer="Strong" data-node-id="320-1735" className="Strong w-[351.03px] h-[26px] left-[784.48px] top-[11846.14px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                <div data-layer="いろいろなダイエット法があります。" data-node-id="320-1736" className="left-[2px] top-[2px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">いろいろなダイエット法があります。</div>
              </div>
            <div data-layer="Strong → もしあなたが、" data-node-id="320-1737" className="Strong left-[888.59px] top-[11932.14px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">もしあなたが、</div>
            <div data-layer="Strong → 運動でムキムキの体を作りたい。" data-node-id="320-1738" className="Strong left-[807.66px] top-[11984.14px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">運動でムキムキの体を作りたい。</div>
            <div data-layer="Strong → 体重が落ちさえすればいい。" data-node-id="320-1739" className="Strong left-[827.89px] top-[12036.14px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">体重が落ちさえすればいい。</div>
            <div data-layer="Strong → と思われているのであれば、" data-node-id="320-1740" className="Strong left-[827.42px] top-[12088.14px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">と思われているのであれば、</div>
            <div data-layer="Strong → 残念ながら私たちは" data-node-id="320-1741" className="Strong left-[868.59px] top-[12140.14px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">残念ながら私たちは</div>
            <div data-layer="Strong → お力になることができないでしょう。" data-node-id="320-1742" className="Strong left-[786.48px] top-[12192.14px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">お力になることができないでしょう。</div>
            <div data-layer="Strong → 理由は" data-node-id="320-1743" className="Strong left-[797.66px] top-[12244.14px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">理由は、これらを目的とするなら、</div>
            <div data-layer="Strong" data-node-id="320-1744" className="Strong w-[314.13px] h-[17px] left-[802.94px] top-[12307.14px] absolute">
                <div data-layer="毎日の欠かさない" data-node-id="320-1745" className="left-0 top-[-4px] absolute text-center justify-center text-[#ff2678] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">毎日の欠かさない</div>
                <div data-layer="筋トレ" data-node-id="320-1746" className="left-[162.34px] top-[-9px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">筋トレ</div>
                <div data-layer="(運動)と" data-node-id="320-1747" className="left-[240.33px] top-[-4px] absolute text-center justify-center text-[#ff2678] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN'] whitespace-nowrap">(運動)と</div>
              </div>
            <div data-layer="Strong" data-node-id="320-1748" className="Strong w-[508px] h-[17px] left-[706.00px] top-[12369.20px] absolute">
                <div data-layer="無理な" data-node-id="320-1749" className="left-0 top-[-4px] absolute text-center justify-center text-[#ff2678] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">無理な</div>
                <div data-layer="食事制限" data-node-id="320-1750" className="left-[60.47px] top-[-9px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">食事制限</div>
                <div data-layer="が必要不可欠になってくるからです。" data-node-id="320-1751" className="left-[162.84px] top-[-4px] absolute text-center justify-center text-[#ff2678] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">が必要不可欠になってくるからです。</div>
              </div>
            <div data-layer="Strong" data-node-id="320-1752" className="Strong w-[341.47px] h-[17px] left-[789.27px] top-[12463.27px] absolute">
                <div data-layer="しかし、あなたが" data-node-id="320-1753" className="left-0 top-[-4px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">しかし、あなたが</div>
                <div data-layer="健康的" data-node-id="320-1754" className="left-[163.28px] top-[-9px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">健康的</div>
                <div data-layer="に美しく、" data-node-id="320-1755" className="left-[240.06px] top-[-4px] absolute text-center justify-center text-[#ff2678] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">に美しく、</div>
              </div>
            <div data-layer="Strong" data-node-id="320-1756" className="Strong w-[320.80px] h-[17px] left-[799.59px] top-[12525.33px] absolute">
                <div data-layer="正しい" data-node-id="320-1757" className="left-0 top-[-9px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">正しい</div>
                <div data-layer="食事と栄養を身につけて、" data-node-id="320-1758" className="left-[77.99px] top-[-4px] absolute text-center justify-center text-[#ff2678] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">食事と栄養を身につけて、</div>
              </div>
            <div data-layer="Strong" data-node-id="320-1759" className="Strong w-[252.84px] h-[17px] left-[833.58px] top-[12587.39px] absolute">
                <div data-layer="リバウンド" data-node-id="320-1760" className="left-0 top-[-9px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">リバウンド</div>
                <div data-layer="しない体質と" data-node-id="320-1761" className="left-[130.97px] top-[-4px] absolute text-center justify-center text-[#ff2678] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">しない体質と</div>
              </div>
            <div data-layer="Strong" data-node-id="320-1762" className="Strong w-[248.22px] h-[26px] left-[745.67px] top-[12643.45px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                <div data-layer="ムキムキではなく健康的で" data-node-id="320-1763" className="left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">ムキムキではなく健康的で</div>
              </div>
            <div data-layer="Strong" data-node-id="320-1764" className="Strong w-40 h-8 left-[993.89px] top-[12638.45px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                <div data-layer="スリムな体型" data-node-id="320-1765" className="left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">スリムな体型</div>
              </div>
            <div data-layer="Strong → を" data-node-id="320-1766" className="Strong left-[1153.86px] top-[12645.45px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">を</div>
            <div data-layer="Strong → 手に入れたいのであれば、" data-node-id="320-1767" className="Strong left-[837.89px] top-[12700.52px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">手に入れたいのであれば、</div>
            <div data-layer="Strong → このページはあなたにとって" data-node-id="320-1768" className="Strong left-[827.19px] top-[12768.52px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">このページはあなたにとって</div>
            <div data-layer="Strong" data-node-id="320-1769" className="Strong w-[488.36px] h-[21px] left-[715.81px] top-[12813.52px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                <div data-layer="Mark → 人生を変えるキッカケ" data-node-id="320-1770" className="Mark left-[2px] top-[-7px] absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">人生を変えるキッカケ</div>
                <div data-layer="になるかも知れません！" data-node-id="320-1771" className="left-[262.14px] top-[-2px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">になるかも知れません！</div>
              </div>
            <img data-layer="Figure → AdobeStock_91479302-1-scaled-2-768x512-1.jpeg" data-node-id="320-1772" className="FigureAdobestock914793021Scaled2768x5121Jpeg w-[312.47px] h-[208.31px] left-[1001.77px] top-[20517.92px] absolute rounded-full" src="/assets/320-1772.webp" />
            <img data-layer="Figure → offer-banner-3-1024x836.webp" data-node-id="320-1773" className="FigureOfferBanner31024x836Webp w-[768px] h-[627px] left-[576.00px] top-[21014.14px] absolute" src="/assets/320-1773.webp" />
            <div data-layer="Background" data-node-id="320-1774" className="Background w-[573.52px] h-[61.42px] left-[675.00px] top-[20415px] absolute bg-[#ff2678] rounded-sm">
                <div data-layer="Strong → そんなあなたに1つ特別なご提案があります" data-node-id="320-1775" className="Strong1 left-[32px] top-[15.80px] absolute text-center justify-center text-white text-[25.60px] font-bold font-['Noto_Sans_JP']">そんなあなたに1つ特別なご提案があります</div>
                <svg data-layer="Polygon 1" data-node-id="320-1776" className="Polygon1 w-[24px] h-[15px] left-[274.76px] top-[61.42px] absolute overflow-hidden" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L0 0H24L12 15Z" fill="#ff2678"/>
                </svg>
              </div>
            <div data-layer="Group 3" data-node-id="320-1777" className="Group3 w-[753.92px] h-[453.08px] left-[576.00px] top-[20518px] absolute">
                <div data-layer="Strong → もしあなたが、本気でダイエットしたい！" data-node-id="320-1778" className="Strong left-0 top-[22.08px] absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">もしあなたが、本気でダイエットしたい！<br/>と思われているなら当院で、</div>
                <div data-layer="Strong" data-node-id="320-1779" className="Strong w-[407px] h-[45px] left-0 top-[70.08px] absolute">
                  <div data-layer="Mark" data-node-id="320-1780" className="Mark w-[283px] h-[19px] left-0 top-[21px] absolute bg-[#b7e3ff]" />
                  <div data-layer="人生最後のダイエットをしませんか？" data-node-id="320-1781" className="left-0 top-[9px] absolute flex items-baseline gap-1 font-bold font-['Noto_Sans_JP']">
                    <span className="text-[#3d79d5] text-[28.20px]">人生最後のダイエット</span>
                    <span className="text-[#333333] text-lg font-bold">をしませんか？</span>
                  </div>
                </div>
                <img data-layer="Figure → AdobeStock_91479302-1-scaled-2-768x512-1.jpeg" data-node-id="320-1782" className="FigureAdobestock914793021Scaled2768x5121Jpeg w-[312.47px] h-[208.31px] left-[426.77px] top-0 absolute rounded-full" src="/assets/320-1782.webp" />
                <div data-layer="Strong" data-node-id="320-1783" className="Strong w-[360.48px] h-[106.42px] left-[3px] top-[170px] absolute">
                  <div data-layer="「どうせ私には無理でしょ…そんな都合のいい話はない…」と思うなら、このページを閉 じていただいても構いません。あなたの大切なお時間を無駄にさせてしまいますから。" data-node-id="320-1784" className="left-[-3px] top-0 absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">「どうせ私には無理でしょ…そんな都合のいい話はない…」と思うなら、このページを閉<br/>じていただいても構いません。あなたの大切なお時間を無駄にさせてしまいますから。</div>
                </div>
                <div data-layer="Strong → Mark" data-node-id="320-1785" className="StrongMark w-[338px] h-[25px] left-[1px] top-[428.08px] absolute bg-[#fcf69f]">
                  <div data-layer="最短で最高の結果が得られます！" data-node-id="320-1786" className="left-[2px] top-0 absolute justify-center text-[#ff2678] text-[22px] font-bold font-['Noto_Sans_JP']">最短で最高の結果が得られます！</div>
                </div>
                <div data-layer="Strong → ダイエットに年齢は関係ありません。始めるのは早ければ早いほど、" data-node-id="320-1787" className="Strong left-[1px] top-[394.78px] absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">ダイエットに年齢は関係ありません。始めるのは早ければ早いほど、</div>
                <div data-layer="Strong" data-node-id="320-1788" className="Strong w-[752.92px] h-[85.31px] left-[1px] top-[265.08px] absolute">
                  <div data-layer="Paragraph+Background" data-node-id="320-1789" className="ParagraphBackground w-[250px] h-5 left-[503px] top-[31.45px] absolute bg-[#b7e3ff]" />
                  <div data-layer="Paragraph+Background" data-node-id="320-1790" className="ParagraphBackground w-[524px] h-[17px] left-0 top-[68.45px] absolute bg-[#b7e3ff]" />
                  <div data-layer="でも、「話を聞くだけなら」と思っていただけたら、このままゆっくりとページをお進みくだ さい。たったの３ヶ月であなたをダイエット成功に導きます！３ヶ月を長く感じますか？放っておくとそれ以上長い時間をダイエットに苦しむことになります。" data-node-id="320-1791" className="left-0 top-[-1.55px] absolute justify-center text-[#333333] text-lg font-bold font-['Noto_Sans_JP']">でも、「話を聞くだけなら」と思っていただけたら、このままゆっくりとページをお進みくだ<br/>さい。たったの３ヶ月であなたをダイエット成功に導きます！３ヶ月を長く感じますか？放っておくとそれ以上長い時間をダイエットに苦しむことになります。</div>
                </div>
              </div>
          </div>
          <img data-layer="Background (3) 1" data-node-id="320-1798" className="Background31 w-[1920px] h-[596px] left-[1px] top-[19168px] absolute" src="/assets/320-1798.webp" />
          <img data-layer="Background (2) 2" data-node-id="319-1097" className="Background22 w-[1920px] h-[3433px] left-[6px] top-[22745px] absolute" src="/assets/319-1097.webp" />
          <img data-layer="Background (1) 2" data-node-id="319-1098" className="Background12 w-[1920px] h-[1508px] left-0 top-[28122px] absolute" src="/assets/319-1098.webp" />
          <div data-layer="Main" data-node-id="319-5" className="Main w-[1920px] h-[39091px] left-0 top-0 absolute overflow-hidden">
            <img data-layer="Figure → offer-banner-3-1024x836.webp" data-node-id="319-16" className="FigureOfferBanner31024x836Webp w-[768px] h-[627px] left-[576.00px] top-[29557.98px] absolute" src="/assets/319-16.webp" />
            <div data-layer="Background" data-node-id="319-591" className="Background w-[1920px] h-[936.23px] left-[0.00px] top-[21705.14px] absolute bg-[#ff86b4]">
                <div data-layer="Heading 3 → Strong → 予約方法 → 予約方法はこちら" data-node-id="319-592" className="Heading3Strong left-[829.69px] top-[33px] absolute text-center justify-center text-white text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">予約方法はこちら</div>
                <div data-layer="List" data-node-id="319-593" className="List w-[768px] h-[65px] left-[576px] top-[102.39px] absolute">
                  <div data-layer="Item" data-node-id="319-594" className="Item w-[738px] h-[30px] left-[30px] top-0 absolute">
                    <div data-layer="Text" data-node-id="319-595" className="Text left-0 top-0 absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']"> </div>
                    <div data-layer="ご予約はLINEからになります。" data-node-id="319-596" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">ご予約はLINEからになります。</div>
                  </div>
                  <div data-layer="Item" data-node-id="319-597" className="Item w-[738px] h-[30px] left-[30px] top-[35px] absolute">
                    <div data-layer="Text" data-node-id="319-598" className="Text left-0 top-0 absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']"> </div>
                    <div data-layer="LINEは２４時間予約可能。" data-node-id="319-599" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">LINEは２４時間予約可能。</div>
                  </div>
                </div>
                <div data-layer="Container" data-node-id="319-600" className="Container w-[768px] h-[696.84px] left-[576px] top-[20622.00px] absolute overflow-hidden z-50">
                  <div data-layer="Background" data-node-id="319-601" className="Background w-[768px] h-[696.84px] left-0 top-0 absolute bg-white" />
                  <a href="https://lin.ee/xXOxJqxk" target="_self" className="absolute left-[32px] top-[60px] w-[704px] h-[305.06px] hover:opacity-90 transition-opacity cursor-pointer z-50"><img data-layer="Figure → Link → LINE%E3%83%90%E3%83%8A%E3%83%BC-1.webp" data-node-id="319-602" className="w-full h-full" src="/assets/319-602.webp" /></a>
                  <div data-layer="Background" data-node-id="319-603" className="Background w-[333.63px] h-[21px] left-[217.19px] top-[390.06px] absolute bg-gradient-to-b from-[#b7e3ff]/0 to-[#b7e3ff]">
                    <div data-layer="Strong" data-node-id="319-604" className="Strong w-[329.63px] h-[22px] left-[2px] top-[-2px] absolute">
                      <a href="http://b.hpr.jp/kr/hp/H000813406" target="_self" className="left-0 top-0 absolute text-center justify-center text-black text-xl font-bold font-['Noto_Sans_JP'] hover:text-[#e52b79] transition-colors cursor-pointer whitespace-nowrap z-50">ホットペッパー予約はこちらから</a>
                      <div data-layer="Mask Group" data-node-id="319-606" className="MaskGroup w-5 h-9 left-[307.62px] top-[-7px] absolute">
                        <div data-layer="Mask" data-node-id="319-607" className="Mask w-5 h-9 left-0 top-0 absolute overflow-hidden">
                          <div data-layer="image" data-node-id="319-608" className="Image w-5 h-5 left-0 top-[8px] absolute overflow-hidden">
                            <img data-layer="Vector" data-node-id="319-609" className="Vector w-[12.25px] h-[7.06px] left-[3.88px] top-[6.88px] absolute" src="/assets/319-609.svg" />
                          </div>
                        </div>
                        <div data-layer="Background" data-node-id="319-610" className="Background w-5 h-9 left-0 top-0 absolute bg-black" />
                      </div>
                    </div>
                  </div>
                  <img data-layer="Figure → Link → hpb-banner-1.webp" data-node-id="319-611" className="FigureLinkHpbBanner1Webp w-[704px] h-[231.78px] left-[32px] top-[433.06px] absolute" src="/assets/319-611.webp" />
                  <div data-layer="Heading 2" data-node-id="319-612" className="Heading2 w-[320.72px] h-[26px] left-[223.64px] top-[33px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="LINE簡単予約はこちらをタップ" data-node-id="319-613" className="Line left-[2px] top-[2px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">LINE簡単予約はこちらをタップ</div>
                    <div data-layer="Mask Group" data-node-id="319-614" className="MaskGroup w-[20.20px] h-7 left-[296.52px] top-[-1px] absolute">
                      <div data-layer="Mask" data-node-id="319-615" className="Mask w-[20.20px] h-7 left-0 top-0 absolute overflow-hidden">
                        <div data-layer="image" data-node-id="319-616" className="Image w-[20.20px] h-[20.20px] left-0 top-[3.90px] absolute overflow-hidden">
                          <img data-layer="Vector" data-node-id="319-617" className="Vector w-[12.37px] h-[7.13px] left-[3.91px] top-[6.94px] absolute" src="/assets/319-617.svg" />
                        </div>
                      </div>
                      <div data-layer="Background" data-node-id="319-618" className="Background w-[20.20px] h-7 left-0 top-0 absolute bg-black" />
                    </div>
                  </div>
                </div>
                <div data-layer="Background" data-node-id="319-619" className="Background w-[1920px] h-[936.23px] left-0 top-[-0.14px] absolute bg-[#ff86b4] z-30">
                  <div data-layer="Heading 3 → Strong → 予約方法 → 予約方法はこちら" data-node-id="319-620" className="Heading3Strong left-[829.69px] top-[33px] absolute text-center justify-center text-white text-[32px] font-bold font-['Noto_Sans_JP']">予約方法はこちら</div>
                  <div data-layer="List" data-node-id="319-621" className="List w-[768px] h-[65px] left-[576px] top-[102.39px] absolute">
                    <div data-layer="Item" data-node-id="319-622" className="Item w-[738px] h-[30px] left-[30px] top-0 absolute">
                      <div data-layer="Text" data-node-id="319-623" className="Text left-0 top-0 absolute justify-center text-white text-xl font-medium font-['YuGothic']"> </div>
                      <div data-layer="ご予約はLINEからになります。" data-node-id="319-624" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-medium font-['YuGothic']">ご予約はLINEからになります。</div>
                    </div>
                    <div data-layer="Item" data-node-id="319-625" className="Item w-[738px] h-[30px] left-[30px] top-[35px] absolute">
                      <div data-layer="Text" data-node-id="319-626" className="Text left-0 top-0 absolute justify-center text-white text-xl font-medium font-['YuGothic']"> </div>
                      <div data-layer="LINEは２４時間予約可能。" data-node-id="319-627" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-medium font-['YuGothic']">LINEは２４時間予約可能。</div>
                    </div>
                  </div>
                  <div data-layer="Container" data-node-id="319-628" className="Container w-[768px] h-[696.84px] left-[591px] top-[201px] absolute overflow-hidden z-50">
                    <div data-layer="Background" data-node-id="319-629" className="Background w-[768px] h-[696.84px] left-0 top-0 absolute bg-white" />
                    <a href="https://lin.ee/xXOxJqxk" target="_self" className="absolute left-[32px] top-[60px] w-[704px] h-[305.06px] hover:opacity-90 transition-opacity cursor-pointer z-50"><img data-layer="Figure → Link → LINE%E3%83%90%E3%83%8A%E3%83%BC-1.webp" data-node-id="319-630" className="w-full h-full" src="/assets/319-630.webp" /></a>
                    <div data-layer="Background" data-node-id="319-631" className="Background w-[333.63px] h-[21px] left-[217.19px] top-[390.06px] absolute bg-gradient-to-b from-[#b7e3ff]/0 to-[#b7e3ff]">
                      <div data-layer="Strong" data-node-id="319-632" className="Strong w-[329.63px] h-[22px] left-[2px] top-[-2px] absolute">
                        <a href="http://b.hpr.jp/kr/hp/H000813406" target="_self" className="left-0 top-0 absolute text-center justify-center text-black text-xl font-bold font-['Noto_Sans_JP'] hover:text-[#e52b79] transition-colors cursor-pointer whitespace-nowrap z-50">ホットペッパー予約はこちらから</a>
                        <div data-layer="Mask Group" data-node-id="319-634" className="MaskGroup w-5 h-9 left-[307.62px] top-[-7px] absolute">
                          <div data-layer="Mask" data-node-id="319-635" className="Mask w-5 h-9 left-0 top-0 absolute overflow-hidden">
                            <div data-layer="image" data-node-id="319-636" className="Image w-5 h-5 left-0 top-[8px] absolute overflow-hidden">
                              <img data-layer="Vector" data-node-id="319-637" className="Vector w-[12.25px] h-[7.06px] left-[3.88px] top-[6.88px] absolute" src="/assets/319-637.svg" />
                            </div>
                          </div>
                          <div data-layer="Background" data-node-id="319-638" className="Background w-5 h-9 left-0 top-0 absolute bg-black" />
                        </div>
                      </div>
                    </div>
                    <img data-layer="Figure → Link → hpb-banner-1.webp" data-node-id="319-639" className="FigureLinkHpbBanner1Webp w-[704px] h-[231.78px] left-[32px] top-[433.06px] absolute overflow-hidden" src="/assets/319-639.webp" />
                    <div data-layer="Heading 2" data-node-id="319-642" className="Heading2 w-[315px] h-[23px] left-[222px] top-[24px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="LINE簡単予約はこちらをタップ" data-node-id="319-643" className="Line left-0 top-[2px] absolute text-center justify-center text-black text-xl font-bold font-['Noto_Sans_JP']">LINE簡単予約はこちらをタップ</div>
                      <div data-layer="Mask Group" data-node-id="319-644" className="MaskGroup w-[20.20px] h-7 left-[294.52px] top-[-1px] absolute">
                        <div data-layer="Mask" data-node-id="319-645" className="Mask w-[20.20px] h-7 left-0 top-0 absolute overflow-hidden">
                          <div data-layer="image" data-node-id="319-646" className="Image w-[20.20px] h-[20.20px] left-0 top-[3.90px] absolute overflow-hidden">
                            <img data-layer="Vector" data-node-id="319-647" className="Vector w-[12.37px] h-[7.13px] left-[3.91px] top-[6.94px] absolute" src="/assets/319-647.svg" />
                          </div>
                        </div>
                        <div data-layer="Background" data-node-id="319-648" className="Background w-[20.20px] h-7 left-0 top-0 absolute bg-black" />
                      </div>
                    </div>
                  </div>
                  <img data-layer="Container 3" data-node-id="319-649" className="Container3 w-[768px] h-[697px] left-[591px] top-[200px] absolute" src="/assets/319-649.webp" />
                </div>
              </div>
            <div data-layer="Background" data-node-id="319-650" className="Background w-[1920px] h-[3432.06px] left-[0.00px] top-[22641.38px] absolute bg-[#ffe9f6]">
                <div data-layer="Strong → 北名古屋で圧倒的なダイエット実績‼︎" data-node-id="319-651" className="Strong left-[792.31px] top-[39px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">北名古屋で圧倒的なダイエット実績‼︎<br/>ビオ整体院で痩せられる</div>
                <div data-layer="Background" data-node-id="319-652" className="Background w-[37.58px] h-[41px] left-[843.14px] top-[113px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                  <div data-layer="Mark → ＼" data-node-id="319-653" className="Mark left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[33.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">＼</div>
                </div>
                <div data-layer="Strong → Mark" data-node-id="319-654" className="StrongMark w-[158.56px] h-[41px] left-[880.72px] top-[113px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                  <div data-layer="7つの理由" data-node-id="319-655" className="left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[33.20px] font-light font-['Hiragino_Kaku_Gothic_ProN']">7つの理由</div>
                </div>
                <div data-layer="Background" data-node-id="319-656" className="Background w-[37.58px] h-[41px] left-[1039.28px] top-[113px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                  <div data-layer="Mark → ／" data-node-id="319-657" className="Mark left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[33.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">／</div>
                </div>
                <div data-layer="Container" data-node-id="319-658" className="Container w-[768px] h-[430px] left-[576px] top-[198.06px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="319-659" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → 191.webp" data-node-id="319-660" className="Figure191Webp w-[226.67px] h-[151.11px] left-[32px] top-[207.94px] absolute" src="/assets/319-660.webp" />
                  <div data-layer="Strong → 運動や施術を一生続けられる人はいません。" data-node-id="319-661" className="Strong left-[282.67px] top-[173.92px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">運動や施術を一生続けられる人はいません。</div>
                  <div data-layer="Strong" data-node-id="319-662" className="Strong w-[445.20px] h-[46.59px] left-[282.67px] top-[213.51px] absolute">
                    <div data-layer="極端に言えば、" data-node-id="319-663" className="left-0 top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">極端に言えば、</div>
                    <div data-layer="Paragraph+Background" data-node-id="319-664" className="ParagraphBackground w-[445.20px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="一生続けられるダイエットは食事しか ないと" data-node-id="319-665" className="left-[115.13px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">一生続けられるダイエットは食事しか ないと</div>
                      <div data-layer="言っても過言ではありません。" data-node-id="319-666" className="left-0 top-[27.60px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">言っても過言ではありません。</div>
                    </div>
                  </div>
                  <div data-layer="Strong → とは言っても、無理な食事制限をするわけではありません。" data-node-id="319-667" className="Strong left-[282.67px] top-[282.70px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">とは言っても、無理な食事制限をするわけではありません。</div>
                  <div data-layer="Strong" data-node-id="319-668" className="Strong w-[440.75px] h-[70.19px] left-[282.67px] top-[324.29px] absolute">
                    <div data-layer="日本再生美容医学協会 ダイエットエキスパート認定院の栄養 学のプロが、" data-node-id="319-669" className="left-0 top-0 absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">日本再生美容医学協会 ダイエットエキスパート認定院の栄養<br/>学のプロが、</div>
                    <div data-layer="Paragraph+Background" data-node-id="319-670" className="ParagraphBackground w-[440.75px] h-[46.59px] left-0 top-[23.60px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="無理のない正しい食事の指導であなたのダイエ" data-node-id="319-671" className="left-[99.50px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">無理のない正しい食事の指導であなたのダイエ</div>
                      <div data-layer="ットを成功に導きます。" data-node-id="319-672" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ットを成功に導きます。</div>
                    </div>
                  </div>
                  <div data-layer="Background+Border" data-node-id="319-673" className="BackgroundBorder w-[695.70px] h-[117px] left-[36.30px] top-[36.92px] absolute bg-gradient-to-l from-[#c7c7c7]/0 via-[#c7c7c7]/20 to-[#c7c7c7]/20 outline outline-4 outline-[#c7c7c7]/20">
                    <div data-layer="Background" data-node-id="319-674" className="Background w-[206.34px] h-[18px] left-[244.67px] top-[36px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="Mark → Strong → 痩せられる理由１" data-node-id="319-675" className="MarkStrong left-[2px] top-[-10px] absolute text-center justify-center text-[#ff2678] text-[25px] font-light font-['Hiragino_Kaku_Gothic_ProN']">痩せられる理由１</div>
                    </div>
                    <div data-layer="Strong → 院長による、あなたの体質に合った無理のない食生活指導" data-node-id="319-676" className="Strong left-[84.79px] top-[70px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">院長による、あなたの体質に合った無理のない食生活指導</div>
                  </div>
                </div>
                <div data-layer="Container" data-node-id="319-677" className="Container w-[768px] h-[430px] left-[576px] top-[660.06px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="319-678" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → reason2.webp" data-node-id="319-679" className="FigureReason2Webp w-[226.66px] h-[151.11px] left-[32px] top-[225.94px] absolute" src="/assets/319-679.webp" />
                  <div data-layer="Strong" data-node-id="319-680" className="Strong w-[296.13px] h-[21px] left-[282.67px] top-[218.72px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="人にはそれぞれ肥満の原因が違います。" data-node-id="319-681" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">人にはそれぞれ肥満の原因が違います。</div>
                  </div>
                  <div data-layer="Strong" data-node-id="319-682" className="Strong w-[441.13px] h-[119.38px] left-[282.67px] top-[262.31px] absolute">
                    <div data-layer="当院では、肥満遺伝子検査を行い、食生活において脂肪？ 糖？タンパク質？の何が原因で太ってしまったのか？等を明 確にし、" data-node-id="319-683" className="left-0 top-0 absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">当院では、肥満遺伝子検査を行い、食生活において脂肪？<br/>糖？タンパク質？の何が原因で太ってしまったのか？等を明<br/>確にし、</div>
                    <div data-layer="Paragraph+Background" data-node-id="319-684" className="ParagraphBackground w-[441.13px] h-[46.59px] left-0 top-[49.19px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="遺伝子レベルであなたに合うオーダーメイドのダイ" data-node-id="319-685" className="left-[66.75px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">遺伝子レベルであなたに合うオーダーメイドのダイ</div>
                      <div data-layer="エット方法を提案し、" data-node-id="319-686" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">エット方法を提案し、</div>
                    </div>
                    <div data-layer="的確なアドバイスでダイエット成功の" data-node-id="319-687" className="left-[163.88px] top-[76.78px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">的確なアドバイスでダイエット成功の</div>
                    <div data-layer="サポートに役立てます！" data-node-id="319-688" className="left-0 top-[102.38px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">サポートに役立てます！</div>
                  </div>
                  <div data-layer="Background+Border" data-node-id="319-689" className="BackgroundBorder w-[695.70px] h-[153px] left-[36.30px] top-[47.72px] absolute bg-gradient-to-l from-[#c7c7c7]/0 via-[#c7c7c7]/20 to-[#c7c7c7]/20 outline outline-4 outline-[#c7c7c7]/20">
                    <div data-layer="Background" data-node-id="319-690" className="Background w-[206.34px] h-[18px] left-[244.67px] top-[36px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="Mark → Strong → 痩せられる理由２" data-node-id="319-691" className="MarkStrong left-[2px] top-[-10px] absolute text-center justify-center text-[#ff2678] text-[25px] font-light font-['Hiragino_Kaku_Gothic_ProN']">痩せられる理由２</div>
                    </div>
                    <div data-layer="Strong → 肥満遺伝子検査で、あなたがどうすれば痩せられるのか？を科学的に検&#10;査" data-node-id="319-692" className="Strong left-[23.62px] top-[70px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">肥満遺伝子検査で、あなたがどうすれば痩せられるのか？を科学的に検<br/>査</div>
                  </div>
                </div>
                <div data-layer="Container" data-node-id="319-693" className="Container w-[768px] h-[430px] left-[576px] top-[1122.06px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="319-694" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → 1940282671-huge-scaled-3.jpg" data-node-id="319-695" className="Figure1940282671HugeScaled3Jpg w-[226.66px] h-[127.50px] left-[32px] top-[219.75px] absolute" src="/assets/319-695.webp" />
                  <div data-layer="Strong → ダイエットが続かない、三日坊主で終わってしまう一番の原&#10;因は「やったのに結果が出ない」というものです。" data-node-id="319-696" className="Strong left-[282.67px] top-[202.72px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットが続かない、三日坊主で終わってしまう一番の原<br/>因は「やったのに結果が出ない」というものです。</div>
                  <div data-layer="Strong" data-node-id="319-697" className="Strong w-[440.75px] h-[97.78px] left-[282.67px] top-[267.90px] absolute">
                    <div data-layer="逆に言うとすぐに結果が出たら続けられるんです。" data-node-id="319-698" className="left-0 top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">逆に言うとすぐに結果が出たら続けられるんです。</div>
                    <div data-layer="Mark" data-node-id="319-699" className="Mark w-[440.75px] h-[97.78px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="当院のダ" data-node-id="319-700" className="left-[376px] top-[2px] absolute justify-center text-[#ff2678] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">当院のダ</div>
                      <div data-layer="イエットは、翌日からすぐ結果が出て、1週間もしたら1キロ 以上痩せています。毎日体重計に乗るのが楽しくなるダイエ ットです。" data-node-id="319-701" className="11 left-0 top-[27.60px] absolute justify-center text-[#ff2678] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">イエットは、翌日からすぐ結果が出て、1週間もしたら1キロ<br/>以上痩せています。毎日体重計に乗るのが楽しくなるダイエ<br/>ットです。</div>
                    </div>
                  </div>
                  <div data-layer="Background+Border" data-node-id="319-702" className="BackgroundBorder w-[695.70px] h-[117px] left-[36.30px] top-[65.72px] absolute bg-gradient-to-l from-[#c7c7c7]/0 via-[#c7c7c7]/20 to-[#c7c7c7]/20 outline outline-4 outline-[#c7c7c7]/20">
                    <div data-layer="Background" data-node-id="319-703" className="Background w-[206.34px] h-[18px] left-[244.67px] top-[36px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="Mark → Strong → 痩せられる理由３" data-node-id="319-704" className="MarkStrong left-[2px] top-[-10px] absolute text-center justify-center text-[#ff2678] text-[25px] font-light font-['Hiragino_Kaku_Gothic_ProN']">痩せられる理由３</div>
                    </div>
                    <div data-layer="Strong → 開始したその日から結果が出るから、楽しく継続できる" data-node-id="319-705" className="Strong left-[94.33px] top-[70px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">開始したその日から結果が出るから、楽しく継続できる</div>
                  </div>
                </div>
                <div data-layer="Container" data-node-id="319-706" className="Container w-[768px] h-[430px] left-[576px] top-[1584.06px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="319-707" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → 193.webp" data-node-id="319-708" className="Figure193Webp w-[226.67px] h-[151.11px] left-[32px] top-[207.94px] absolute" src="/assets/319-708.webp" />
                  <div data-layer="Strong" data-node-id="319-709" className="Strong w-[439.13px] h-[44.59px] left-[282.67px] top-[189.92px] absolute">
                    <div data-layer="「骨盤矯正ダイエット」って聞いたことありますか？はっき り言います。" data-node-id="319-710" className="left-0 top-0 absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">「骨盤矯正ダイエット」って聞いたことありますか？はっき<br/>り言います。</div>
                    <div data-layer="Background" data-node-id="319-711" className="Background w-[280.13px] h-[21px] left-[97.50px] top-[23.59px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="骨盤矯正をしただけでは痩せません！" data-node-id="319-712" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">骨盤矯正をしただけでは痩せません！</div>
                    </div>
                  </div>
                  <div data-layer="Strong" data-node-id="319-713" className="Strong w-[452.88px] h-[119.38px] left-[282.67px] top-[257.11px] absolute">
                    <div data-layer="しかし、私のダイエットの効果を最大限引き出すためには絶 対に必要な施術になります。さらに、私の痩身美容整体を受け ることによって、" data-node-id="319-714" className="left-0 top-0 absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">しかし、私のダイエットの効果を最大限引き出すためには絶<br/>対に必要な施術になります。さらに、私の痩身美容整体を受け<br/>ることによって、</div>
                    <div data-layer="Background" data-node-id="319-715" className="Background w-[296.50px] h-[21px] left-[130.63px] top-[49.18px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="姿勢が良くなり、見た目がキレイになる" data-node-id="319-716" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">姿勢が良くなり、見た目がキレイになる</div>
                    </div>
                    <div data-layer="こ" data-node-id="319-717" className="left-[427.13px] top-[51.18px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">こ</div>
                    <div data-layer="とはもちろん、その他の体の不調の改善も同時に可能となり ます。" data-node-id="319-718" className="left-0 top-[76.78px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">とはもちろん、その他の体の不調の改善も同時に可能となり<br/>ます。</div>
                  </div>
                  <div data-layer="Background+Border" data-node-id="319-719" className="BackgroundBorder w-[695.70px] h-[117px] left-[36.30px] top-[52.92px] absolute bg-gradient-to-l from-[#c7c7c7]/0 via-[#c7c7c7]/20 to-[#c7c7c7]/20 outline outline-4 outline-[#c7c7c7]/20">
                    <div data-layer="Background" data-node-id="319-720" className="Background w-[206.34px] h-[18px] left-[244.67px] top-[36px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="Mark → Strong → 痩せられる理由４" data-node-id="319-721" className="MarkStrong left-[2px] top-[-10px] absolute text-center justify-center text-[#ff2678] text-[25px] font-light font-['Hiragino_Kaku_Gothic_ProN']">痩せられる理由４</div>
                    </div>
                    <div data-layer="Strong → 痩身美容整体が受けられること" data-node-id="319-722" className="Strong left-[206.20px] top-[70px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">痩身美容整体が受けられること</div>
                  </div>
                </div>
                <div data-layer="Container" data-node-id="319-723" className="Container w-[768px] h-[430px] left-[576px] top-[2046.06px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="319-724" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → 197.webp" data-node-id="319-725" className="Figure197Webp w-[226.67px] h-[151.11px] left-[32px] top-[207.94px] absolute" src="/assets/319-725.webp" />
                  <div data-layer="Strong → 「停滞期が続き、ダイエット諦めた」" data-node-id="319-726" className="Strong left-[282.67px] top-[194.72px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">「停滞期が続き、ダイエット諦めた」</div>
                  <div data-layer="Strong → このような経験はありませんか？" data-node-id="319-727" className="Strong left-[282.67px] top-[236.31px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">このような経験はありませんか？</div>
                  <div data-layer="Strong" data-node-id="319-728" className="Strong w-[440px] h-[97.78px] left-[282.67px] top-[275.90px] absolute">
                    <div data-layer="当院のダイエットでも停滞期は起こります。しかし、" data-node-id="319-729" className="left-0 top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">当院のダイエットでも停滞期は起こります。しかし、</div>
                    <div data-layer="Paragraph+Background" data-node-id="319-730" className="ParagraphBackground w-[440px] h-[97.78px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="停滞期" data-node-id="319-731" className="left-[392px] top-[2px] absolute justify-center text-[#ff2678] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">停滞期</div>
                      <div data-layer="がきなぜ起こるのか？いつ起こるのか？どうすれば抜け出せ るのか？全て理解しているので、目標達成率が非常に高くな っています。" data-node-id="319-732" className="left-0 top-[27.60px] absolute justify-center text-[#ff2678] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">がきなぜ起こるのか？いつ起こるのか？どうすれば抜け出せ<br/>るのか？全て理解しているので、目標達成率が非常に高くな<br/>っています。</div>
                    </div>
                  </div>
                  <div data-layer="Background+Border" data-node-id="319-733" className="BackgroundBorder w-[695.70px] h-[117px] left-[36.30px] top-[57.72px] absolute bg-gradient-to-l from-[#c7c7c7]/0 via-[#c7c7c7]/20 to-[#c7c7c7]/20 outline outline-4 outline-[#c7c7c7]/20">
                    <div data-layer="Background" data-node-id="319-734" className="Background w-[206.34px] h-[18px] left-[244.67px] top-[36px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="Mark → Strong → 痩せられる理由５" data-node-id="319-735" className="MarkStrong left-[2px] top-[-10px] absolute text-center justify-center text-[#ff2678] text-[25px] font-light font-['Hiragino_Kaku_Gothic_ProN']">痩せられる理由５</div>
                    </div>
                    <div data-layer="Strong → 停滞期の抜け出し方を知っているから目標まで達成できる" data-node-id="319-736" className="Strong left-[84.33px] top-[70px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">停滞期の抜け出し方を知っているから目標まで達成できる</div>
                  </div>
                </div>
                <div data-layer="Container" data-node-id="319-737" className="Container w-[768px] h-[430px] left-[576px] top-[2508.06px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="319-738" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → 192.webp" data-node-id="319-739" className="Figure192Webp w-[226.67px] h-[151.11px] left-[32px] top-[207.94px] absolute" src="/assets/319-739.webp" />
                  <div data-layer="Strong" data-node-id="319-740" className="Strong w-[444.25px] h-[70.19px] left-[282.67px] top-[195.92px] absolute">
                    <div data-layer="Background" data-node-id="319-741" className="Background w-[232.13px] h-[21px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="ダイエットは一人では続かない" data-node-id="319-742" className="left-[2px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットは一人では続かない</div>
                    </div>
                    <div data-layer="ことを私たちはよく知ってい" data-node-id="319-743" className="left-[232.13px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ことを私たちはよく知ってい</div>
                    <div data-layer="ますし、精神論でダイエットは無理があることも分かってま す。" data-node-id="319-744" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ますし、精神論でダイエットは無理があることも分かってま<br/>す。</div>
                  </div>
                  <div data-layer="Strong" data-node-id="319-745" className="Strong w-[445.08px] h-[70.19px] left-[282.67px] top-[300.29px] absolute">
                    <div data-layer="ですので、いつでもLINEのやりとりができるようにし、あな たの不安を解消いたします。" data-node-id="319-746" className="Line left-0 top-0 absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ですので、いつでもLINEのやりとりができるようにし、あな<br/>たの不安を解消いたします。</div>
                    <div data-layer="Paragraph+Background" data-node-id="319-747" className="ParagraphBackground w-[440.75px] h-[46.59px] left-0 top-[23.60px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="私と一緒にどうすれば痩せられ" data-node-id="319-748" className="left-[213px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">私と一緒にどうすれば痩せられ</div>
                      <div data-layer="るのか？を考えて、" data-node-id="319-749" className="left-0 top-[27.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">るのか？を考えて、</div>
                    </div>
                    <div data-layer="実行していきましょう。" data-node-id="319-750" className="left-[148.25px] top-[51.19px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">実行していきましょう。</div>
                  </div>
                  <div data-layer="Background+Border" data-node-id="319-751" className="BackgroundBorder w-[695.70px] h-[117px] left-[36.30px] top-[60.92px] absolute bg-gradient-to-l from-[#c7c7c7]/0 via-[#c7c7c7]/20 to-[#c7c7c7]/20 outline outline-4 outline-[#c7c7c7]/20">
                    <div data-layer="Background" data-node-id="319-752" className="Background w-[206.34px] h-[18px] left-[244.67px] top-[36px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="Mark → Strong → 痩せられる理由６" data-node-id="319-753" className="MarkStrong left-[2px] top-[-10px] absolute text-center justify-center text-[#ff2678] text-[25px] font-light font-['Hiragino_Kaku_Gothic_ProN']">痩せられる理由６</div>
                    </div>
                    <div data-layer="Strong → 充実したサポートで不安を解消" data-node-id="319-754" className="Strong left-[206.20px] top-[70px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">充実したサポートで不安を解消</div>
                  </div>
                </div>
                <div data-layer="Container" data-node-id="319-755" className="Container w-[768px] h-[430px] left-[576px] top-[2970.06px] absolute overflow-hidden">
                  <div data-layer="Background" data-node-id="319-756" className="Background w-[768px] h-[430px] left-0 top-0 absolute bg-white" />
                  <img data-layer="Figure → 198.webp" data-node-id="319-757" className="Figure198Webp w-[226.67px] h-[151.11px] left-[32px] top-[207.94px] absolute" src="/assets/319-757.webp" />
                  <div data-layer="Strong → 多くの整体院やエステサロン・トレーニングジムでは、複数&#10;の先生が務めていて通院されるたび に毎回担当が違い、状況&#10;を何度も説明しなくてはならない。" data-node-id="319-758" className="Strong left-[282.67px] top-[194.72px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">多くの整体院やエステサロン・トレーニングジムでは、複数<br/>の先生が務めていて通院されるたび に毎回担当が違い、状況<br/>を何度も説明しなくてはならない。</div>
                  <div data-layer="Strong → こんな経験をされたことはないでしょうか？" data-node-id="319-759" className="Strong left-[282.67px] top-[287.50px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">こんな経験をされたことはないでしょうか？</div>
                  <div data-layer="Strong" data-node-id="319-760" className="Strong w-[440.38px] h-[46.59px] left-[282.67px] top-[327.09px] absolute">
                    <div data-layer="ビオ整体院では、" data-node-id="319-761" className="left-0 top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ビオ整体院では、</div>
                    <div data-layer="Paragraph+Background" data-node-id="319-762" className="ParagraphBackground w-[440.38px] h-[46.59px] left-0 top-0 absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="院長があなたのダイエットを最初から最後" data-node-id="319-763" className="left-[131.50px] top-[2px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">院長があなたのダイエットを最初から最後</div>
                      <div data-layer="まで責任を持ってしっかりと真摯に 向き合います。" data-node-id="319-764" className="left-0 top-[27.60px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">まで責任を持ってしっかりと真摯に 向き合います。</div>
                    </div>
                  </div>
                  <div data-layer="Background+Border" data-node-id="319-765" className="BackgroundBorder w-[695.70px] h-[117px] left-[36.30px] top-[57.72px] absolute bg-gradient-to-l from-[#c7c7c7]/0 via-[#c7c7c7]/20 to-[#c7c7c7]/20 outline outline-4 outline-[#c7c7c7]/20">
                    <div data-layer="Background" data-node-id="319-766" className="Background w-[206.34px] h-[18px] left-[244.67px] top-[36px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="Mark → Strong → 痩せられる理由７" data-node-id="319-767" className="MarkStrong left-[2px] top-[-10px] absolute text-center justify-center text-[#ff2678] text-[25px] font-light font-['Hiragino_Kaku_Gothic_ProN']">痩せられる理由７</div>
                    </div>
                    <div data-layer="Strong → マンツーマンで責任を持ってサポートさせていただくから" data-node-id="319-768" className="Strong left-[82.92px] top-[70px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">マンツーマンで責任を持ってサポートさせていただくから</div>
                  </div>
                </div>
              </div>
            <div data-layer="Background" data-node-id="319-769" className="Background w-[1920px] h-[1722px] left-[0.00px] top-[26073.44px] absolute bg-[#fff2f7]">
                <img data-layer="Figure → reason05.jpg" data-node-id="319-770" className="FigureReason05Jpg w-[767.98px] h-[844.80px] left-[576px] top-[32px] absolute" src="/assets/319-770.webp" />
                <img data-layer="Figure → reason123.png" data-node-id="319-771" className="FigureReason123Png w-[767.98px] h-[704.41px] left-[576px] top-[892.79px] absolute" src="/assets/319-771.webp" />
                <div data-layer="※効果には個人差があります。" data-node-id="319-772" className="left-[1174.03px] top-[1637.20px] absolute text-right justify-center text-[#333333] text-xs font-light font-['Hiragino_Kaku_Gothic_ProN']">※効果には個人差があります。</div>
              </div>
            <div data-layer="Background" data-node-id="319-773" className="Background w-[1920px] h-[1507.44px] left-[0.00px] top-[28002.55px] absolute bg-[#f7f7f7]">
                <div data-layer="Heading 2 → Strong → 代表の想い" data-node-id="319-774" className="Heading2Strong left-[878.75px] top-[68px] absolute text-center justify-center text-[#333333] text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">代表の想い</div>
                <img data-layer="Figure → 199.webp" data-node-id="319-775" className="Figure199Webp w-[312.47px] h-[208.31px] left-[605.77px] top-[140.79px] absolute" src="/assets/319-775.webp" />
                <div data-layer="Heading 2 → Strong → ビオ整体院に通って、" data-node-id="319-776" className="Heading2Strong left-[972px] top-[143.79px] absolute justify-center text-[#333333] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">ビオ整体院に通って、</div>
                <div data-layer="Heading 2 → Strong → Mark → ”人生が変わった”" data-node-id="319-777" className="Heading2StrongMark left-[972px] top-[186.34px] absolute justify-center text-[#ff2678] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">”人生が変わった”</div>
                <div data-layer="Heading 2 → Strong → これが私が目指す整体院の形です → これが私が目指す整体院の形です。" data-node-id="319-778" className="Heading2Strong left-[972px] top-[225.89px] absolute justify-center text-[#333333] text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">これが私が目指す整体院の形です。</div>
                <div data-layer="はじめまして。ダイエットに強いビオ整体院院長の小泉宏輝と申します。 私はダイエットに特化した整体院を運営しており、地域の皆様を始めとする多くの方の施術に携わってい ます。" data-node-id="319-779" className="left-[576px] top-[402.11px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">はじめまして。ダイエットに強いビオ整体院院長の小泉宏輝と申します。<br/>私はダイエットに特化した整体院を運営しており、地域の皆様を始めとする多くの方の施術に携わってい<br/>ます。</div>
                <div data-layer="そんな私がなぜダイエットの施術を始めたのかには理由があります。" data-node-id="319-780" className="left-[576px] top-[515.50px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">そんな私がなぜダイエットの施術を始めたのかには理由があります。</div>
                <div data-layer="私は元々、痛みや不調改善に特化した施術を行なっておりました。" data-node-id="319-781" className="left-[576px] top-[576.29px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">私は元々、痛みや不調改善に特化した施術を行なっておりました。</div>
                <div data-layer="その中、当院に来られたほとんどの方のお悩みの中に、痛み以外にも冷え性や肌荒れや肥満、アトピーや 花粉などのアレルギー症状、酷い生理痛や不妊などの体質に問題を抱えている現状を目の当たりにしまし た。" data-node-id="319-782" className="left-[576px] top-[642.09px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">その中、当院に来られたほとんどの方のお悩みの中に、痛み以外にも冷え性や肌荒れや肥満、アトピーや<br/>花粉などのアレルギー症状、酷い生理痛や不妊などの体質に問題を抱えている現状を目の当たりにしまし<br/>た。</div>
                <div data-layer="さらに、生活習慣病で代表的な糖尿病を始めとする脳卒中や心臓病、癌などの怖い病気を抱えている方も 多くいらっしゃいました。 この現状に関して色々調べてみると、一番の問題は食生活の乱れである事が分かりました。" data-node-id="319-783" className="left-[576px] top-[760.48px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">さらに、生活習慣病で代表的な糖尿病を始めとする脳卒中や心臓病、癌などの怖い病気を抱えている方も<br/>多くいらっしゃいました。<br/>この現状に関して色々調べてみると、一番の問題は食生活の乱れである事が分かりました。</div>
                <div data-layer="私は元々「健康寿命を延ばしたい」という信念がありましたのでそこから、分子栄養学、食事、体質改善 を本格的に勉強していきました。" data-node-id="319-784" className="left-[576px] top-[878.87px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">私は元々「健康寿命を延ばしたい」という信念がありましたのでそこから、分子栄養学、食事、体質改善<br/>を本格的に勉強していきました。</div>
                <div data-layer="私はダイエットを通じて、健康になってもらい、見た目も綺麗に変われるきっかけになれればと思い、体 質改善に特化した根本改善ダイエットのサポートをさせて頂いております。" data-node-id="319-785" className="left-[576px] top-[968.47px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">私はダイエットを通じて、健康になってもらい、見た目も綺麗に変われるきっかけになれればと思い、体<br/>質改善に特化した根本改善ダイエットのサポートをさせて頂いております。</div>
                <div data-layer="本気でお客様の人生を変えるサービスを求めて、それに必要な知識と技術を学び続けてきたからこそ、サ ービスへの自信とこだわりがあります！" data-node-id="319-786" className="left-[576px] top-[1058.06px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">本気でお客様の人生を変えるサービスを求めて、それに必要な知識と技術を学び続けてきたからこそ、サ<br/>ービスへの自信とこだわりがあります！</div>
                <div data-layer="ダイエットを諦めていた方、何をやっても変わらなかった方の最後の砦となれるよう、お一人お一人に真 剣に向き合っていきます。" data-node-id="319-787" className="left-[576px] top-[1147.65px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットを諦めていた方、何をやっても変わらなかった方の最後の砦となれるよう、お一人お一人に真<br/>剣に向き合っていきます。</div>
                <div data-layer="もし、あなたがまだ心のどこかで" data-node-id="319-788" className="left-[576px] top-[1232.25px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">もし、あなたがまだ心のどこかで</div>
                <div data-layer="「理想の自分を叶えたい」と思っているのであれば" data-node-id="319-789" className="left-[576px] top-[1293.04px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">「理想の自分を叶えたい」と思っているのであれば</div>
                <div data-layer="ぜひ、勇気を出してお気軽にビオ整体院にお越しください。" data-node-id="319-790" className="left-[576px] top-[1353.84px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ぜひ、勇気を出してお気軽にビオ整体院にお越しください。</div>
                <div data-layer="あなたが未来のために踏み出した勇気、私が全て受け止めます。" data-node-id="319-791" className="left-[576px] top-[1414.64px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">あなたが未来のために踏み出した勇気、私が全て受け止めます。</div>
              </div>
            <div data-layer="Border" data-node-id="319-966" className="Border w-[767.70px] h-[143.11px] left-[576.30px] top-[27827.44px] absolute outline outline-4 outline-offset-[-4px] outline-[#ff2678]">
                <div data-layer="Strong" data-node-id="319-967" className="Strong w-[437.91px] h-5 left-[164.89px] top-[48.39px] absolute">
                  <div data-layer="結果重視の本格的な" data-node-id="319-968" className="left-0 top-0 absolute text-center justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">結果重視の本格的な</div>
                  <div data-layer="Background" data-node-id="319-969" className="Background w-[260.72px] h-[35px] left-[159.17px] top-[-11px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="Mark → 根本改善ダイエット" data-node-id="319-970" className="Mark left-[2px] top-[2px] absolute text-center justify-center text-[#ff2678] text-[28.20px] font-light font-['Hiragino_Kaku_Gothic_ProN']">根本改善ダイエット</div>
                  </div>
                  <div data-layer="で" data-node-id="319-971" className="left-[419.89px] top-0 absolute text-center justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">で</div>
                </div>
                <div data-layer="Strong → Strong → Strong → あなたのダイエットを徹底サポート" data-node-id="319-972" className="StrongStrongStrong left-[231.61px] top-[86.06px] absolute text-center justify-center text-[#333333] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">あなたのダイエットを徹底サポート！</div>
              </div>
            <img data-layer="769×627 CTA 3" data-node-id="319-1083" className="627Cta3 w-[769px] h-[627px] left-[575.00px] top-[29558px] absolute" src="/assets/319-1083.webp" />
          </div>
          <div data-layer="Main" data-node-id="325-1809" className="Main w-[1920px] h-[39091px] left-0 top-0 absolute overflow-hidden">
            <div data-layer="Background" data-node-id="325-2012" className="Background w-[1920px] h-[936.23px] left-[0.00px] top-[30216.98px] absolute bg-[#ff86b4] z-30">
                <div data-layer="Heading 3 → Strong → 予約方法 → 予約方法はこちら" data-node-id="325-2013" className="Heading3Strong left-[829.69px] top-[33px] absolute text-center justify-center text-white text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">予約方法はこちら</div>
                <div data-layer="List" data-node-id="325-2014" className="List w-[768px] h-[65px] left-[576px] top-[102.40px] absolute">
                  <div data-layer="Item" data-node-id="325-2015" className="Item w-[738px] h-[30px] left-[30px] top-0 absolute">
                    <div data-layer="Text" data-node-id="325-2016" className="Text left-0 top-0 absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']"> </div>
                    <div data-layer="ご予約はLINEからになります。" data-node-id="325-2017" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">ご予約はLINEからになります。</div>
                  </div>
                  <div data-layer="Item" data-node-id="325-2018" className="Item w-[738px] h-[30px] left-[30px] top-[35px] absolute">
                    <div data-layer="Text" data-node-id="325-2019" className="Text left-0 top-0 absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']"> </div>
                    <div data-layer="LINEは２４時間予約可能。" data-node-id="325-2020" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">LINEは２４時間予約可能。</div>
                  </div>
                </div>
                <div data-layer="Container" data-node-id="325-2021" className="Container w-[768px] h-[696.84px] left-[576px] top-[30423.98px] absolute overflow-hidden z-50">
                  <div data-layer="Background" data-node-id="325-2022" className="Background w-[768px] h-[696.84px] left-0 top-0 absolute bg-white" />
                  <a href="https://lin.ee/xXOxJqxk" target="_self" className="absolute left-[32px] top-[60px] w-[704px] h-[305.06px] hover:opacity-90 transition-opacity cursor-pointer z-50"><img data-layer="Figure → Link → LINE%E3%83%90%E3%83%8A%E3%83%BC-1.webp" data-node-id="325-2023" className="w-full h-full" src="/assets/325-2023.webp" /></a>
                  <div data-layer="Background" data-node-id="325-2024" className="Background w-[333.63px] h-[21px] left-[217.19px] top-[390.06px] absolute bg-gradient-to-b from-[#b7e3ff]/0 to-[#b7e3ff]">
                    <div data-layer="Strong" data-node-id="325-2025" className="Strong w-[329.63px] h-[22px] left-[2px] top-[-2px] absolute">
                      <a href="http://b.hpr.jp/kr/hp/H000813406" target="_self" className="left-0 top-0 absolute text-center justify-center text-black text-xl font-bold font-['Noto_Sans_JP'] hover:text-[#e52b79] transition-colors cursor-pointer whitespace-nowrap z-50">ホットペッパー予約はこちらから</a>
                      <div data-layer="Mask Group" data-node-id="325-2027" className="MaskGroup w-5 h-9 left-[307.62px] top-[-7px] absolute">
                        <div data-layer="Mask" data-node-id="325-2028" className="Mask w-5 h-9 left-0 top-0 absolute overflow-hidden">
                          <div data-layer="image" data-node-id="325-2029" className="Image w-5 h-5 left-0 top-[8px] absolute overflow-hidden">
                            <img data-layer="Vector" data-node-id="325-2030" className="Vector w-[12.25px] h-[7.06px] left-[3.88px] top-[6.88px] absolute" src="/assets/325-2030.svg" />
                          </div>
                        </div>
                        <div data-layer="Background" data-node-id="325-2031" className="Background w-5 h-9 left-0 top-0 absolute bg-black" />
                      </div>
                    </div>
                  </div>
                  <img data-layer="Figure → Link → hpb-banner-1.webp" data-node-id="325-2032" className="FigureLinkHpbBanner1Webp w-[704px] h-[231.78px] left-[32px] top-[433.06px] absolute" src="/assets/325-2032.webp" />
                  <div data-layer="Heading 2" data-node-id="325-2033" className="Heading2 w-[320.72px] h-[26px] left-[223.64px] top-[33px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="LINE簡単予約はこちらをタップ" data-node-id="325-2034" className="Line left-[2px] top-[2px] absolute text-center justify-center text-black text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">LINE簡単予約はこちらをタップ</div>
                    <div data-layer="Mask Group" data-node-id="325-2035" className="MaskGroup w-[20.20px] h-7 left-[296.52px] top-[-1px] absolute">
                      <div data-layer="Mask" data-node-id="325-2036" className="Mask w-[20.20px] h-7 left-0 top-0 absolute overflow-hidden">
                        <div data-layer="image" data-node-id="325-2037" className="Image w-[20.20px] h-[20.20px] left-0 top-[3.90px] absolute overflow-hidden">
                          <img data-layer="Vector" data-node-id="325-2038" className="Vector w-[12.37px] h-[7.13px] left-[3.91px] top-[6.94px] absolute" src="/assets/325-2038.svg" />
                        </div>
                      </div>
                      <div data-layer="Background" data-node-id="325-2039" className="Background w-[20.20px] h-7 left-0 top-0 absolute bg-black" />
                    </div>
                  </div>
                </div>
                <img data-layer="Container 2" data-node-id="325-2040" className="Container2 w-[768px] h-[697px] left-[576px] top-[207.02px] absolute" src="/assets/325-2040.webp" />
              </div>
            <div data-layer="Background" data-node-id="325-2041" className="Background w-[1920px] h-[2246.42px] left-[0.00px] top-[31153.22px] absolute bg-[#fff2f7]">
                <div data-layer="カウンセリング" data-node-id="325-2042" className="left-[640px] top-[121.80px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">カウンセリング</div>
                <div data-layer="Vertical Divider" data-node-id="325-2043" className="VerticalDivider w-px h-[346.78px] left-[599px] top-[108.80px] absolute border-l border-[#c7c7c7]/50" />
                <div data-layer="Background" data-node-id="325-2044" className="Background w-12 h-12 left-[576px] top-[108.80px] absolute bg-[#ff2678] rounded-3xl">
                  <div data-layer="STEP" data-node-id="325-2045" className="Step left-[10.94px] top-[7.50px] absolute text-center justify-center text-white text-[10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">STEP</div>
                  <div data-layer="Rectangle" data-node-id="325-2046" className="Rectangle w-12 h-5 left-0 top-[19.50px] absolute" />
                </div>
                <div data-layer="Background" data-node-id="325-2047" className="Background w-[704px] h-[234.78px] left-[640px] top-[172.80px] absolute bg-white">
                  <div data-layer="Overlay+Shadow" data-node-id="325-2048" className="OverlayShadow w-[704px] h-[234.78px] left-0 top-0 absolute bg-white/0 shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                  <img data-layer="Figure → 531A9528-1024x683.jpg" data-node-id="325-2049" className="Figure531a95281024x683Jpg w-[352px] h-[234.78px] left-0 top-0 absolute" src="/assets/325-2049.webp" />
                  <div data-layer="Strong → お客様お一人お一人に合った、 ダイエッ&#10;トプランを作成するため、目標体重・期&#10;日は勿論、病歴やアレルギーなどをお聞&#10;きし、私の分子栄養学の臨床に適合させ&#10;てプランを考えてまいります。" data-node-id="325-2050" className="Strong left-[376px] top-[50.39px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">お客様お一人お一人に合った、 ダイエッ<br/>トプランを作成するため、目標体重・期<br/>日は勿論、病歴やアレルギーなどをお聞<br/>きし、私の分子栄養学の臨床に適合させ<br/>てプランを考えてまいります。</div>
                </div>
                <div data-layer="測定" data-node-id="325-2051" className="left-[640px] top-[468.58px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">測定</div>
                <div data-layer="Vertical Divider" data-node-id="325-2052" className="VerticalDivider w-px h-[346.66px] left-[599px] top-[455.58px] absolute border-l border-[#c7c7c7]/50" />
                <div data-layer="Background" data-node-id="325-2053" className="Background w-12 h-12 left-[576px] top-[455.58px] absolute bg-[#ff2678] rounded-3xl">
                  <div data-layer="STEP" data-node-id="325-2054" className="Step left-[10.94px] top-[7.50px] absolute text-center justify-center text-white text-[10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">STEP</div>
                  <div data-layer="Rectangle" data-node-id="325-2055" className="Rectangle w-12 h-5 left-0 top-[19.50px] absolute" />
                </div>
                <div data-layer="Background" data-node-id="325-2056" className="Background w-[704px] h-[234.66px] left-[640px] top-[519.58px] absolute bg-white">
                  <div data-layer="Overlay+Shadow" data-node-id="325-2057" className="OverlayShadow w-[704px] h-[234.66px] left-0 top-0 absolute bg-white/0 shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                  <img data-layer="Figure → 6-2.webp" data-node-id="325-2058" className="Figure62Webp w-[352px] h-[234.66px] left-0 top-0 absolute" src="/assets/325-2058.webp" />
                  <div data-layer="Strong" data-node-id="325-2059" className="Strong w-[295.83px] h-[103.39px] left-[376px] top-[64.73px] absolute">
                    <div data-layer="まず大事なのは、ご自身の現状を 把握す ることです。それを踏まえて、" data-node-id="325-2060" className="left-0 top-0 absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">まず大事なのは、ご自身の現状を 把握す<br/>ることです。それを踏まえて、</div>
                    <div data-layer="Paragraph+Background" data-node-id="325-2061" className="ParagraphBackground w-[294.13px] h-[49.80px] left-0 top-[26.80px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="目標設定" data-node-id="325-2062" className="left-[230.13px] top-[2px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">目標設定</div>
                      <div data-layer="していきます。" data-node-id="325-2063" className="left-0 top-[30.80px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">していきます。</div>
                    </div>
                    <div data-layer="一つの目安は現在の体重から-15% !" data-node-id="325-2064" className="15 left-0 top-[86.39px] absolute justify-center text-[#ff2678] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">一つの目安は現在の体重から-15% !</div>
                  </div>
                </div>
                <div data-layer="痩身美容整体" data-node-id="325-2065" className="left-[640px] top-[815.23px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">痩身美容整体</div>
                <div data-layer="Vertical Divider" data-node-id="325-2066" className="VerticalDivider w-px h-[361.58px] left-[599px] top-[802.23px] absolute border-l border-[#c7c7c7]/50" />
                <div data-layer="Background" data-node-id="325-2067" className="Background w-12 h-12 left-[576px] top-[802.23px] absolute bg-[#ff2678] rounded-3xl">
                  <div data-layer="STEP" data-node-id="325-2068" className="Step left-[10.94px] top-[7.50px] absolute text-center justify-center text-white text-[10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">STEP</div>
                  <div data-layer="Rectangle" data-node-id="325-2069" className="Rectangle w-12 h-5 left-0 top-[19.50px] absolute" />
                </div>
                <div data-layer="Background" data-node-id="325-2070" className="Background w-[704px] h-[249.58px] left-[640px] top-[866.23px] absolute bg-white">
                  <div data-layer="Overlay+Shadow" data-node-id="325-2071" className="OverlayShadow w-[704px] h-[249.58px] left-0 top-0 absolute bg-white/0 shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                  <img data-layer="Figure → 193-1.webp" data-node-id="325-2072" className="Figure1931Webp w-[352px] h-[249.58px] left-0 top-0 absolute" src="/assets/325-2072.webp" />
                  <div data-layer="Strong → 「骨盤矯正ダイエット」って 聞いたこと&#10;ありますか? はっきり言いますが、じつ&#10;は、&#10;骨盤矯正をしただけでは痩せません !&#10;しかし、当院のダイエットの効果を最大&#10;限引き出すためには絶対に必要な施術に&#10;なります。" data-node-id="325-2073" className="Strong left-[376px] top-[29px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">「骨盤矯正ダイエット」って 聞いたこと<br/>ありますか? はっきり言いますが、じつ<br/>は、<br/>骨盤矯正をしただけでは痩せません !<br/>しかし、当院のダイエットの効果を最大<br/>限引き出すためには絶対に必要な施術に<br/>なります。</div>
                </div>
                <div data-layer="食事指導" data-node-id="325-2074" className="left-[640px] top-[1176.81px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">食事指導</div>
                <div data-layer="Vertical Divider" data-node-id="325-2075" className="VerticalDivider w-px h-[361.58px] left-[599px] top-[1163.81px] absolute border-l border-[#c7c7c7]/50" />
                <div data-layer="Background" data-node-id="325-2076" className="Background w-12 h-12 left-[576px] top-[1163.81px] absolute bg-[#ff2678] rounded-3xl">
                  <div data-layer="STEP" data-node-id="325-2077" className="Step left-[10.94px] top-[7.50px] absolute text-center justify-center text-white text-[10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">STEP</div>
                  <div data-layer="Rectangle" data-node-id="325-2078" className="Rectangle w-12 h-5 left-0 top-[19.50px] absolute" />
                </div>
                <div data-layer="Background" data-node-id="325-2079" className="Background w-[704px] h-[249.58px] left-[640px] top-[1227.81px] absolute bg-white">
                  <div data-layer="Overlay+Shadow" data-node-id="325-2080" className="OverlayShadow w-[704px] h-[249.58px] left-0 top-0 absolute bg-white/0 shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                  <img data-layer="Figure → 5.webp" data-node-id="325-2081" className="Figure5Webp w-[352px] h-[249.58px] left-0 top-0 absolute" src="/assets/325-2081.webp" />
                  <div data-layer="Strong → 健康的に痩せるためには、栄養学の知識&#10;が必要不可欠です。&#10;しかし、栄養学で痩せることはできませ&#10;ん。分子栄養学と言う学問の知識が必要&#10;不可欠です。&#10;分子栄養学を元にあなたに必要な栄養素&#10;をお伝えしていきます。" data-node-id="325-2082" className="Strong left-[376px] top-[29px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">健康的に痩せるためには、栄養学の知識<br/>が必要不可欠です。<br/>しかし、栄養学で痩せることはできませ<br/>ん。分子栄養学と言う学問の知識が必要<br/>不可欠です。<br/>分子栄養学を元にあなたに必要な栄養素<br/>をお伝えしていきます。</div>
                </div>
                <div data-layer="ダイエットアドバイス&amp;計画作成" data-node-id="325-2083" className="left-[640px] top-[1538.39px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットアドバイス&計画作成</div>
                <div data-layer="Vertical Divider" data-node-id="325-2084" className="VerticalDivider w-px h-[346.66px] left-[599px] top-[1525.39px] absolute border-l border-[#c7c7c7]/50" />
                <div data-layer="Background" data-node-id="325-2085" className="Background w-12 h-12 left-[576px] top-[1525.39px] absolute bg-[#ff2678] rounded-3xl">
                  <div data-layer="STEP" data-node-id="325-2086" className="Step left-[10.94px] top-[7.50px] absolute text-center justify-center text-white text-[10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">STEP</div>
                  <div data-layer="Rectangle" data-node-id="325-2087" className="Rectangle w-12 h-5 left-0 top-[19.50px] absolute" />
                </div>
                <div data-layer="Background" data-node-id="325-2088" className="Background w-[704px] h-[234.66px] left-[640px] top-[1589.39px] absolute bg-white">
                  <div data-layer="Overlay+Shadow" data-node-id="325-2089" className="OverlayShadow w-[704px] h-[234.66px] left-0 top-0 absolute bg-white/0 shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                  <img data-layer="Figure → 191.webp" data-node-id="325-2090" className="Figure191Webp w-[352px] h-[234.66px] left-0 top-0 absolute" src="/assets/325-2090.webp" />
                  <div data-layer="Strong → カウンセリンング、検査結果を元に、何&#10;が原因で太りやすくなっているかをより&#10;明確にし、ダイエット成功のアドバイス&#10;を行い、人生最後のダイエットプランを&#10;作ります。" data-node-id="325-2091" className="Strong left-[376px] top-[50.33px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">カウンセリンング、検査結果を元に、何<br/>が原因で太りやすくなっているかをより<br/>明確にし、ダイエット成功のアドバイス<br/>を行い、人生最後のダイエットプランを<br/>作ります。</div>
                </div>
                <div data-layer="人生最後のダイエットスタート" data-node-id="325-2092" className="left-[640px] top-[1885.05px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">人生最後のダイエットスタート</div>
                <div data-layer="Background" data-node-id="325-2093" className="Background w-12 h-12 left-[576px] top-[1872.05px] absolute bg-[#ff2678] rounded-3xl">
                  <div data-layer="STEP" data-node-id="325-2094" className="Step left-[10.94px] top-[7.50px] absolute text-center justify-center text-white text-[10px] font-light font-['Hiragino_Kaku_Gothic_ProN']">STEP</div>
                  <div data-layer="Rectangle" data-node-id="325-2095" className="Rectangle w-12 h-5 left-0 top-[19.50px] absolute" />
                </div>
                <div data-layer="Background" data-node-id="325-2096" className="Background w-[704px] h-[278.38px] left-[640px] top-[1936.05px] absolute bg-white">
                  <div data-layer="Overlay+Shadow" data-node-id="325-2097" className="OverlayShadow w-[704px] h-[278.38px] left-0 top-0 absolute bg-white/0 shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                  <img data-layer="Figure → 192.webp" data-node-id="325-2098" className="Figure192Webp w-[352px] h-[278.38px] left-0 top-0 absolute" src="/assets/325-2098.webp" />
                  <div data-layer="Strong → 初回のカウンセリングなどを踏まえダイ&#10;エット計画をお話させていただき、ご納&#10;得いただいてからダイエットコースの施&#10;術を行なっていきます！当院の人生最後&#10;のダイエットコースを「ぜひやってみた&#10;い！」思っていただいた方のみのご案内&#10;となりますので、お気軽にお越しくださ&#10;い。" data-node-id="325-2099" className="Strong left-[376px] top-[29px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">初回のカウンセリングなどを踏まえダイ<br/>エット計画をお話させていただき、ご納<br/>得いただいてからダイエットコースの施<br/>術を行なっていきます！当院の人生最後<br/>のダイエットコースを「ぜひやってみた<br/>い！」思っていただいた方のみのご案内<br/>となりますので、お気軽にお越しくださ<br/>い。</div>
                </div>
                <div data-layer="Heading 2 → 申し込み後の流れ" data-node-id="325-2100" className="Heading2 left-[829.69px] top-[36px] absolute text-center justify-center text-[#ff2678] text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">申し込み後の流れ</div>
              </div>
            <div data-layer="Background" data-node-id="325-2101" className="Background w-[1920px] h-[1070.78px] left-[0.00px] top-[34784.44px] absolute bg-[#f7f7f7]">
                <div data-layer="Background+Border" data-node-id="325-2102" className="BackgroundBorder w-[767.70px] h-[122px] left-[576.30px] top-[108.79px] absolute bg-white outline outline-1 outline-offset-[-1px] outline-[#ff2678]">
                  <div data-layer="Strong → ビオ整体院北名古屋院は、" data-node-id="325-2103" className="Strong left-[263.14px] top-[32px] absolute text-center justify-center text-[#ff2678] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">ビオ整体院北名古屋院は、</div>
                  <div data-layer="Background" data-node-id="325-2104" className="Background w-[176.53px] h-[21px] left-[271.20px] top-[70px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                    <div data-layer="Strong → 西春駅から車で3分" data-node-id="325-2105" className="Strong3 left-[2px] top-[-2px] absolute text-center justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">西春駅から車で3分</div>
                  </div>
                  <div data-layer="Strong → です。" data-node-id="325-2106" className="Strong left-[447.73px] top-[72px] absolute text-center justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">です。</div>
                </div>
                <div data-layer="Overlay+Shadow" data-node-id="325-2107" className="OverlayShadow w-[768px] h-[293.98px] left-[576px] top-[744.79px] absolute bg-white/0 shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] overflow-hidden">
                  <div data-layer="Paragraph+Background" data-node-id="325-2108" className="ParagraphBackground w-[768px] h-64 left-0 top-[38px] absolute bg-white">
                    <div data-layer="店舗名：　ビオ整体院 北名古屋院" data-node-id="325-2109" className="left-[24px] top-[24px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">店舗名：　ビオ整体院 北名古屋院</div>
                    <div data-layer="営業時間：　9:00～12:00/16:00～20:00" data-node-id="325-2110" className="900120016002000 left-[24px] top-[68.80px] absolute justify-center text-[#333333] text-sm font-light font-['Hiragino_Kaku_Gothic_ProN']">営業時間：　9:00～12:00/16:00～20:00</div>
                    <div data-layer="定休日：　水曜日(土日祝日営業)" data-node-id="325-2111" className="left-[24px] top-[113.60px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">定休日：　水曜日(土日祝日営業)</div>
                    <div data-layer="住所：　〒481-0033 愛知県北名古屋市西之保三町地５０" data-node-id="325-2112" className="4810033 left-[24px] top-[158.40px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">住所：　〒481-0033 愛知県北名古屋市西之保三町地５０</div>
                    <div data-layer="交通：　「西春駅駅」から車で3分" data-node-id="325-2113" className="3 left-[24px] top-[203.19px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">交通：　「西春駅駅」から車で3分</div>
                  </div>
                  <div data-layer="Background" data-node-id="325-2114" className="Background w-[768px] h-10 left-0 top-0 absolute bg-[#ff2678]">
                    <div data-layer="院詳細" data-node-id="325-2115" className="left-[360px] top-[8px] absolute text-center justify-center text-white text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">院詳細</div>
                  </div>
                </div>
                <div data-layer="Heading 2 → Strong → 来院経路" data-node-id="325-2116" className="Heading2Strong left-[895.59px] top-[36px] absolute text-center justify-center text-[#333333] text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">来院経路</div>
                <div data-layer="Background" data-node-id="325-2117" className="Background w-[1920px] h-[1070.78px] left-0 top-[0.56px] absolute bg-[#f7f7f7]">
                  <div data-layer="Background+Border" data-node-id="325-2118" className="BackgroundBorder w-[767.70px] h-[122px] left-[576.30px] top-[108.79px] absolute bg-white outline outline-1 outline-offset-[-1px] outline-[#ff2678]">
                    <div data-layer="Strong → ビオ整体院北名古屋院は、" data-node-id="325-2119" className="Strong left-[263.14px] top-[32px] absolute text-center justify-center text-[#ff2678] text-xl font-bold font-['Noto_Sans_JP']">ゆい整骨院は、</div>
                    <div data-layer="Background" data-node-id="325-2120" className="Background w-[176.53px] h-[21px] left-[271.20px] top-[70px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                      <div data-layer="Strong → 西春駅から車で3分" data-node-id="325-2121" className="Strong3 left-[2px] top-[-2px] absolute text-center justify-center text-[#333333] text-xl font-bold font-['Noto_Sans_JP']">戸塚駅から車で6分</div>
                    </div>
                    <div data-layer="Strong → です。" data-node-id="325-2122" className="Strong left-[447.73px] top-[72px] absolute text-center justify-center text-[#333333] text-base font-bold font-['Noto_Sans_JP']">です。</div>
                  </div>
                  <div data-layer="Overlay+Shadow" data-node-id="325-2123" className="OverlayShadow w-[768px] h-[293.98px] left-[576px] top-[744.79px] absolute bg-white/0 shadow-[0px_4px_4px_-4px_rgba(0,0,0,0.10)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] overflow-hidden">
                    <div data-layer="Paragraph+Background" data-node-id="325-2124" className="ParagraphBackground w-[768px] h-64 left-0 top-[38px] absolute bg-white">
                      <div data-layer="店舗名：　ゆい整骨院" data-node-id="325-2125" className="left-[24px] top-[24px] absolute justify-center text-[#333333] text-base font-medium font-['YuGothic']">店舗名：　ゆい整骨院</div>
                      <div data-layer="営業時間：　10:00～20:00" data-node-id="325-2126" className="10002000 left-[24px] top-[68.80px] absolute justify-center text-[#333333] text-base font-medium font-['YuGothic']">営業時間：　10:00～20:00</div>
                      <div data-layer="定休日：　木曜日" data-node-id="325-2127" className="left-[24px] top-[113.60px] absolute justify-center text-[#333333] text-base font-medium font-['YuGothic']">定休日：　木曜日</div>
                      <div data-layer="住所：　〒245-0053　神奈川県横浜市戸塚区上矢部町２５７−１ 上矢部ビル 2階C号室" data-node-id="325-2128" className="24500532C left-[24px] top-[158.77px] absolute justify-center text-[#333333] text-base font-medium font-['YuGothic']">住所：　〒245-0053　神奈川県横浜市戸塚区上矢部町２５７−１ 上矢部ビル 2階C号室</div>
                      <div data-layer="交通：　「戸塚駅」から車で6分　駐車場完備" data-node-id="325-2129" className="6 left-[24px] top-[202.77px] absolute justify-center text-[#333333] text-base font-medium font-['YuGothic']">交通：　「戸塚駅」から車で6分　駐車場完備</div>
                    </div>
                    <div data-layer="Background" data-node-id="325-2130" className="Background w-[768px] h-10 left-0 top-0 absolute bg-[#ff2678]">
                      <div data-layer="院詳細" data-node-id="325-2131" className="left-[360px] top-[8px] absolute text-center justify-center text-white text-base font-medium font-['YuGothic']">院詳細</div>
                    </div>
                  </div>
                  <div data-layer="Heading 2 → Strong → 来院経路" data-node-id="325-2132" className="Heading2Strong left-[895.59px] top-[36px] absolute text-center justify-center text-[#333333] text-[32px] font-bold font-['Noto_Sans_JP']">来院経路</div>
                  <div data-layer="Google Map" data-node-id="325-2133" className="MaskGroup w-[769px] h-[512px] left-[576px] top-[232.56px] absolute rounded-md overflow-hidden border border-[#c7c7c7]/60 shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.2843734024345!2d139.5372332!3d35.4093815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185966779b76e1%3A0xc3b86064789505c!2z44CSMjQ1LTAwNTMg56We5aWI5bed55yM5qiq5rWc5biC5oi45aGa5Yy65LiK5aSi6YOo55S677yS777V777default!5e0!3m2!1sja!2sjp!4v1716912000000!5m2!1sja!2sjp" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                </div>
              </div>
            <div data-layer="Descriptions" data-node-id="325-2143" className="Descriptions w-[768px] h-[1164px] left-[576.00px] top-[33588.44px] absolute">
                <div data-layer="Term" data-node-id="325-2144" className="Term w-[768px] h-[70px] left-0 top-0 absolute bg-[#c7c7c7]/20">
                  <div data-layer="Strong → 運動は本当にしなくてもいいんですか？" data-node-id="325-2145" className="Strong left-[64px] top-[24px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">運動は本当にしなくてもいいんですか？</div>
                  <div data-layer="Background" data-node-id="325-2146" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#d55656]">
                    <div data-layer="Q" data-node-id="325-2147" className="Q left-[9.77px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">Q</div>
                  </div>
                </div>
                <div data-layer="Details" data-node-id="325-2148" className="Details w-[768px] h-40 left-0 top-[70px] absolute">
                  <div data-layer="Strong → はい。運動は一切しなくても大丈夫です。&#10;ただ、正確に言えば、やらないよりはやったほうがいいけど、やらなくても大丈夫と言うこと&#10;です。&#10;運動ができる人、好きな人はもちろんやっても 問題ありませんし、運動やってダメってこと&#10;はないですからね。" data-node-id="325-2149" className="Strong left-[64px] top-[23px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">はい。運動は一切しなくても大丈夫です。<br/>ただ、正確に言えば、やらないよりはやったほうがいいけど、やらなくても大丈夫と言うこと<br/>です。<br/>運動ができる人、好きな人はもちろんやっても 問題ありませんし、運動やってダメってこと<br/>はないですからね。</div>
                  <div data-layer="Background" data-node-id="325-2150" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#6599b7]">
                    <div data-layer="A" data-node-id="325-2151" className="A left-[10.66px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">A</div>
                  </div>
                </div>
                <div data-layer="Term" data-node-id="325-2152" className="Term w-[768px] h-[70px] left-0 top-[254px] absolute bg-[#c7c7c7]/20">
                  <div data-layer="Strong → -8kg以上ではなく、-5kgくらい痩せたい人も大丈夫なんですか？" data-node-id="325-2153" className="Strong8kg5kg left-[64px] top-[24px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">-8kg以上ではなく、-5kgくらい痩せたい人も大丈夫なんですか？</div>
                  <div data-layer="Background" data-node-id="325-2154" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#d55656]">
                    <div data-layer="Q" data-node-id="325-2155" className="Q left-[9.77px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">Q</div>
                  </div>
                </div>
                <div data-layer="Details" data-node-id="325-2156" className="Details w-[768px] h-28 left-0 top-[324px] absolute">
                  <div data-layer="Strong → もちろん問題ありません。&#10;ダイエットの目標や目的は人それぞれですので、その方に合わせた ダイエットプランをご提&#10;案させていただきます。" data-node-id="325-2157" className="Strong left-[64px] top-[23px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">もちろん問題ありません。<br/>ダイエットの目標や目的は人それぞれですので、その方に合わせた ダイエットプランをご提<br/>案させていただきます。</div>
                  <div data-layer="Background" data-node-id="325-2158" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#6599b7]">
                    <div data-layer="A" data-node-id="325-2159" className="A left-[10.66px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">A</div>
                  </div>
                </div>
                <div data-layer="Term" data-node-id="325-2160" className="Term w-[768px] h-[70px] left-0 top-[460px] absolute bg-[#c7c7c7]/20">
                  <div data-layer="Strong → 予約制ですか？" data-node-id="325-2161" className="Strong left-[64px] top-[24px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">予約制ですか？</div>
                  <div data-layer="Background" data-node-id="325-2162" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#d55656]">
                    <div data-layer="Q" data-node-id="325-2163" className="Q left-[9.77px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">Q</div>
                  </div>
                </div>
                <div data-layer="Details" data-node-id="325-2164" className="Details w-[768px] h-[88px] left-0 top-[530px] absolute">
                  <div data-layer="Strong → 当院は「完全予約制」になっております。予約時間ぴったりもしくは5分前にお越しくださ&#10;い。" data-node-id="325-2165" className="Strong5 left-[64px] top-[23px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">当院は「完全予約制」になっております。予約時間ぴったりもしくは5分前にお越しくださ<br/>い。</div>
                  <div data-layer="Background" data-node-id="325-2166" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#6599b7]">
                    <div data-layer="A" data-node-id="325-2167" className="A left-[10.66px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">A</div>
                  </div>
                </div>
                <div data-layer="Term" data-node-id="325-2168" className="Term w-[768px] h-[70px] left-0 top-[642px] absolute bg-[#c7c7c7]/20">
                  <div data-layer="Strong → クレジットカードは使えますか？" data-node-id="325-2169" className="Strong left-[64px] top-[24px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">クレジットカードは使えますか？</div>
                  <div data-layer="Background" data-node-id="325-2170" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#d55656]">
                    <div data-layer="Q" data-node-id="325-2171" className="Q left-[9.77px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">Q</div>
                  </div>
                </div>
                <div data-layer="Details" data-node-id="325-2172" className="Details w-[768px] h-16 left-0 top-[712px] absolute">
                  <div data-layer="Strong → はい、使えます。VISA、MasterCard、JCB、Diners、American Expressが使用可能です。" data-node-id="325-2173" className="StrongVisaMastercardJcbDinersAmericanExpress left-[64px] top-[23px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">はい、使えます。VISA、MasterCard、JCB、Diners、American Expressが使用可能です。</div>
                  <div data-layer="Background" data-node-id="325-2174" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#6599b7]">
                    <div data-layer="A" data-node-id="325-2175" className="A left-[10.66px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">A</div>
                  </div>
                </div>
                <div data-layer="Term" data-node-id="325-2176" className="Term w-[768px] h-[70px] left-0 top-[800px] absolute bg-[#c7c7c7]/20">
                  <div data-layer="Strong → 服装は？" data-node-id="325-2177" className="Strong left-[64px] top-[24px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">服装は？</div>
                  <div data-layer="Background" data-node-id="325-2178" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#d55656]">
                    <div data-layer="Q" data-node-id="325-2179" className="Q left-[9.77px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">Q</div>
                  </div>
                </div>
                <div data-layer="Details" data-node-id="325-2180" className="Details w-[768px] h-[136px] left-0 top-[870px] absolute">
                  <div data-layer="Strong → 動きやすい服装が望ましいです。&#10;動きが制限される服装（スカート・きつめのジーンズ）は、 なるべく避けて頂くよう宜しくお&#10;願い致します。着替えるスペースもご用意しておりますので、着替えをお持ち頂いても大丈夫&#10;です。" data-node-id="325-2181" className="Strong left-[64px] top-[23px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">動きやすい服装が望ましいです。<br/>動きが制限される服装（スカート・きつめのジーンズ）は、 なるべく避けて頂くよう宜しくお<br/>願い致します。着替えるスペースもご用意しておりますので、着替えをお持ち頂いても大丈夫<br/>です。</div>
                  <div data-layer="Background" data-node-id="325-2182" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#6599b7]">
                    <div data-layer="A" data-node-id="325-2183" className="A left-[10.66px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">A</div>
                  </div>
                </div>
                <div data-layer="Term" data-node-id="325-2184" className="Term w-[768px] h-[70px] left-0 top-[1030px] absolute bg-[#c7c7c7]/20">
                  <div data-layer="Strong → ダイエットについての相談や質問はできますか？" data-node-id="325-2185" className="Strong left-[64px] top-[24px] absolute justify-center text-[#333333] text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットについての相談や質問はできますか？</div>
                  <div data-layer="Background" data-node-id="325-2186" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#d55656]">
                    <div data-layer="Q" data-node-id="325-2187" className="Q left-[9.77px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">Q</div>
                  </div>
                </div>
                <div data-layer="Details" data-node-id="325-2188" className="Details w-[768px] h-16 left-0 top-[1100px] absolute">
                  <div data-layer="Strong → メール・LINEでのご相談は無料でお受けいたします。遠慮なくご相談ください。" data-node-id="325-2189" className="StrongLine left-[64px] top-[23px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">メール・LINEでのご相談は無料でお受けいたします。遠慮なくご相談ください。</div>
                  <div data-layer="Background" data-node-id="325-2190" className="Background w-8 h-8 left-[16px] top-[16px] absolute bg-[#6599b7]">
                    <div data-layer="A" data-node-id="325-2191" className="A left-[10.66px] top-[7px] absolute text-center justify-center text-white text-base font-normal font-['Arial']">A</div>
                  </div>
                </div>
              </div>
            <div data-layer="Heading 2 → よくある質問" data-node-id="325-2192" className="Heading2 left-[861.89px] top-[33479.64px] absolute text-center justify-center text-[#333333] text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">よくある質問</div>
            <div data-layer="Background" data-node-id="325-2193" className="Background w-[363.02px] h-[152.31px] left-[778.48px] top-[36018.41px] absolute bg-[#ff2678] rounded-sm">
                <div data-layer="Strong → 本気で変わりたいあなたは" data-node-id="325-2194" className="Strong left-[44.80px] top-[47.79px] absolute text-center justify-center text-white text-[22.40px] font-light font-['Hiragino_Kaku_Gothic_ProN']">本気で変わりたいあなたは<br/>どの道を選びますか？</div>
                <div data-layer="Border" data-node-id="325-2195" className="Border w-6 h-6 left-[169.50px] top-[150.31px] absolute border-[12px] border-[#ff2678]" />
              </div>
            <div data-layer="Background" data-node-id="325-2196" className="Background w-[1920px] h-[934.77px] left-[0.00px] top-[36170.72px] absolute bg-white">
                <div data-layer="Strong → or" data-node-id="325-2197" className="StrongOr left-[952px] top-[199px] absolute text-center justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">or</div>
                <div data-layer="Strong → or" data-node-id="325-2198" className="StrongOr left-[952px] top-[449.39px] absolute text-center justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">or</div>
                <div data-layer="あなたがどの道を選ぶのも自由です。しかし、よく考えてみてください。 一生その悩みを我慢し続ける 人生でいいのですか？" data-node-id="325-2199" className="left-[576px] top-[728.58px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">あなたがどの道を選ぶのも自由です。しかし、よく考えてみてください。 一生その悩みを我慢し続ける<br/>人生でいいのですか？</div>
                <div data-layer="迷いなく「NO！」と即答できたのであれば、いますぐ当院へご連絡ください。" data-node-id="325-2200" className="No left-[576px] top-[813.17px] absolute justify-center text-[#333333] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">迷いなく「NO！」と即答できたのであれば、いますぐ当院へご連絡ください。</div>
                <div data-layer="Strong → 私はあなたが出会った誰よりも真剣にあなたと向き合います。" data-node-id="325-2201" className="Strong left-[576px] top-[878.97px] absolute justify-center text-[#ff2678] text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">私はあなたが出会った誰よりも真剣にあなたと向き合います。</div>
                <div data-layer="Container" data-node-id="325-2202" className="Container w-[768px] h-[130px] left-[576px] top-[32px] absolute overflow-hidden">
                  <div data-layer="Overlay" data-node-id="325-2203" className="Overlay w-[768px] h-[130px] left-0 top-0 absolute bg-[#c7c7c7]/20" />
                  <div data-layer="Strong → ■1つ目は、" data-node-id="325-2204" className="Strong1 left-[32px] top-[39.59px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">■1つ目は、</div>
                  <div data-layer="ダイエットの悩みを日々抱えながら、何もせずに時間が過ぎていくのを待つだけの道。" data-node-id="325-2205" className="left-[32px] top-[68.59px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットの悩みを日々抱えながら、何もせずに時間が過ぎていくのを待つだけの道。</div>
                </div>
                <div data-layer="Container" data-node-id="325-2206" className="Container w-[768px] h-[157.59px] left-[576px] top-[254.80px] absolute overflow-hidden">
                  <div data-layer="Overlay" data-node-id="325-2207" className="Overlay w-[768px] h-[157.59px] left-0 top-0 absolute bg-[#c7c7c7]/20" />
                  <div data-layer="Strong → ■2つ目は、" data-node-id="325-2208" className="Strong2 left-[32px] top-[39px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">■2つ目は、</div>
                  <div data-layer="ダイエット結果の得られない方法を試し続けて、貴重なお金と時間を無駄に使い、いつまでたっ ても理想 の自分を手に入れることができない道。" data-node-id="325-2209" className="left-[32px] top-[73px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエット結果の得られない方法を試し続けて、貴重なお金と時間を無駄に使い、いつまでたっ<br/>ても理想 の自分を手に入れることができない道。</div>
                </div>
                <div data-layer="Container" data-node-id="325-2210" className="Container w-[768px] h-[186.39px] left-[576px] top-[505.19px] absolute overflow-hidden">
                  <div data-layer="Overlay" data-node-id="325-2211" className="Overlay w-[768px] h-[186.39px] left-0 top-0 absolute bg-[#c7c7c7]/20" />
                  <div data-layer="Strong → ■3つ目は、" data-node-id="325-2212" className="Strong3 left-[32px] top-[39px] absolute justify-center text-[#ff2678] text-lg font-light font-['Hiragino_Kaku_Gothic_ProN']">■3つ目は、</div>
                  <div data-layer="ダイエットのプロとしての証である資格を保有し、数多くのお客様から支持され、あなたの悩み に真正面から向き合う、ビオ整体院に来院し、健康と美容の先にある理想の自分を叶えて心から 思いっきり楽しめる人生を手に入れる道。" data-node-id="325-2213" className="left-[32px] top-[73px] absolute justify-center text-black text-base font-light font-['Hiragino_Kaku_Gothic_ProN']">ダイエットのプロとしての証である資格を保有し、数多くのお客様から支持され、あなたの悩み<br/>に真正面から向き合う、ビオ整体院に来院し、健康と美容の先にある理想の自分を叶えて心から<br/>思いっきり楽しめる人生を手に入れる道。</div>
                </div>
              </div>
            <img data-layer="Figure → image" data-node-id="325-2214" className="FigureImage w-[800px] h-[800px] left-[560.00px] top-[37137.48px] absolute overflow-hidden" src="/assets/325-2214.webp" />
            <div data-layer="Background" data-node-id="325-2218" className="Background w-[1920px] h-[924px] left-[0.00px] top-[37969px] absolute bg-[#ff86b4] z-30">
                <div data-layer="Heading 3 → Strong → 予約方法 → 予約方法はこちら" data-node-id="325-2219" className="Heading3Strong left-[829.69px] top-[33px] absolute text-center justify-center text-white text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">予約方法はこちら</div>
                <div data-layer="List" data-node-id="325-2220" className="List w-[768px] h-[65px] left-[576px] top-[102.40px] absolute">
                  <div data-layer="Item" data-node-id="325-2221" className="Item w-[738px] h-[30px] left-[30px] top-0 absolute">
                    <div data-layer="Text" data-node-id="325-2222" className="Text left-0 top-0 absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']"> </div>
                    <div data-layer="ご予約はLINEからになります。" data-node-id="325-2223" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">ご予約はLINEからになります。</div>
                  </div>
                  <div data-layer="Item" data-node-id="325-2224" className="Item w-[738px] h-[30px] left-[30px] top-[35px] absolute">
                    <div data-layer="Text" data-node-id="325-2225" className="Text left-0 top-0 absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']"> </div>
                    <div data-layer="LINEは２４時間予約可能。" data-node-id="325-2226" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-light font-['Hiragino_Kaku_Gothic_ProN']">LINEは２４時間予約可能。</div>
                  </div>
                </div>
              </div>
            <div data-layer="Heading 2 → 最後に" data-node-id="325-2227" className="Heading2 left-[911.31px] top-[35891.22px] absolute text-center justify-center text-[#ff2678] text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">最後に</div>
            <div data-layer="Heading 2" data-node-id="325-2228" className="Heading2 w-[800px] h-[44.80px] left-[560.00px] top-[35948.02px] absolute">
                <div data-layer="あなたには" data-node-id="325-2229" className="left-[219.73px] top-[10px] absolute text-center justify-center text-[#333333] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">あなたには</div>
                <div data-layer="Mark" data-node-id="325-2230" className="Mark w-[96.59px] h-7 left-[351.70px] top-[10px] absolute">
                  <div data-layer="3" data-node-id="325-2231" className="left-0 top-[-6px] absolute text-center justify-center text-[#ff2678] text-[32px] font-light font-['Hiragino_Kaku_Gothic_ProN']">3</div>
                  <div data-layer="つの道" data-node-id="325-2232" className="left-[18px] top-0 absolute text-center justify-center text-[#ff2678] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">つの道</div>
                </div>
                <div data-layer="があります" data-node-id="325-2233" className="left-[448.30px] top-[10px] absolute text-center justify-center text-[#333333] text-[25.60px] font-light font-['Hiragino_Kaku_Gothic_ProN']">があります</div>
              </div>
          </div>
          <img data-layer="Background 3" data-node-id="325-2237" className="Background3 w-[1920px] h-[2247px] left-0 top-[31153px] absolute" src="/assets/325-2237.webp" />
          <div data-layer="Background" data-node-id="325-2238" className="Background w-[1920px] h-[936.23px] left-0 top-[38077px] absolute bg-[#ff86b4] z-30">
              <div data-layer="Heading 3 → Strong → 予約方法 → 予約方法はこちら" data-node-id="325-2239" className="Heading3Strong left-[829.69px] top-[33px] absolute text-center justify-center text-white text-[32px] font-bold font-['Noto_Sans_JP']">予約方法はこちら</div>
              <div data-layer="List" data-node-id="325-2240" className="List w-[768px] h-[65px] left-[576px] top-[102.40px] absolute">
                <div data-layer="Item" data-node-id="325-2241" className="Item w-[738px] h-[30px] left-[30px] top-0 absolute">
                  <div data-layer="Text" data-node-id="325-2242" className="Text left-0 top-0 absolute justify-center text-white text-xl font-medium font-['YuGothic']"> </div>
                  <div data-layer="ご予約はLINEからになります。" data-node-id="325-2243" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-medium font-['YuGothic']">ご予約はLINEからになります。</div>
                </div>
                <div data-layer="Item" data-node-id="325-2244" className="Item w-[738px] h-[30px] left-[30px] top-[35px] absolute">
                  <div data-layer="Text" data-node-id="325-2245" className="Text left-0 top-0 absolute justify-center text-white text-xl font-medium font-['YuGothic']"> </div>
                  <div data-layer="LINEは２４時間予約可能。" data-node-id="325-2246" className="Line left-0 top-[4px] absolute justify-center text-white text-xl font-medium font-['YuGothic']">LINEは２４時間予約可能。</div>
                </div>
              </div>
              <div data-layer="Container" data-node-id="325-2247" className="Container w-[768px] h-[696.84px] left-[576px] top-[38278.00px] absolute overflow-hidden z-50">
                <div data-layer="Background" data-node-id="325-2248" className="Background w-[768px] h-[696.84px] left-0 top-0 absolute bg-white" />
                <a href="https://lin.ee/xXOxJqxk" target="_self" className="absolute left-[32px] top-[51px] w-[704px] h-[305.06px] hover:opacity-90 transition-opacity cursor-pointer z-50"><img data-layer="Figure → Link → LINE%E3%83%90%E3%83%8A%E3%83%BC-1.webp" data-node-id="325-2249" className="w-full h-full" src="/assets/325-2249.webp" /></a>
                <div data-layer="Background" data-node-id="325-2250" className="Background w-[333.63px] h-[21px] left-[217.19px] top-[390.06px] absolute bg-gradient-to-b from-[#b7e3ff]/0 to-[#b7e3ff]">
                  <div data-layer="Strong" data-node-id="325-2251" className="Strong w-[329.63px] h-[22px] left-[2px] top-[-2px] absolute">
                    <a href="http://b.hpr.jp/kr/hp/H000813406" target="_self" className="left-0 top-0 absolute text-center justify-center text-black text-xl font-bold font-['Noto_Sans_JP'] hover:text-[#e52b79] transition-colors cursor-pointer whitespace-nowrap z-50">ホットペッパー予約はこちらから</a>
                    <div data-layer="Mask Group" data-node-id="325-2253" className="MaskGroup w-5 h-9 left-[307.62px] top-[-7px] absolute">
                      <div data-layer="Mask" data-node-id="325-2254" className="Mask w-5 h-9 left-0 top-0 absolute overflow-hidden">
                        <div data-layer="image" data-node-id="325-2255" className="Image w-5 h-5 left-0 top-[8px] absolute overflow-hidden">
                          <img data-layer="Vector" data-node-id="325-2256" className="Vector w-[12.25px] h-[7.06px] left-[3.88px] top-[6.88px] absolute" src="/assets/325-2256.svg" />
                        </div>
                      </div>
                      <div data-layer="Background" data-node-id="325-2257" className="Background w-5 h-9 left-0 top-0 absolute bg-black" />
                    </div>
                  </div>
                </div>
                <img data-layer="Figure → Link → hpb-banner-1.webp" data-node-id="325-2258" className="FigureLinkHpbBanner1Webp w-[704px] h-[231.78px] left-[32px] top-[433.06px] absolute overflow-hidden" src="/assets/325-2258.webp" />
                <div data-layer="Heading 2" data-node-id="325-2261" className="Heading2 w-[315px] h-[23px] left-[222px] top-[24px] absolute bg-gradient-to-b from-[#fcf69f]/0 to-[#fcf69f]">
                  <div data-layer="LINE簡単予約はこちらをタップ" data-node-id="325-2262" className="Line left-0 top-[2px] absolute text-center justify-center text-black text-xl font-bold font-['Noto_Sans_JP']">LINE簡単予約はこちらをタップ</div>
                  <div data-layer="Mask Group" data-node-id="325-2263" className="MaskGroup w-[20.20px] h-7 left-[294.52px] top-[-1px] absolute">
                    <div data-layer="Mask" data-node-id="325-2264" className="Mask w-[20.20px] h-7 left-0 top-0 absolute overflow-hidden">
                      <div data-layer="image" data-node-id="325-2265" className="Image w-[20.20px] h-[20.20px] left-0 top-[3.90px] absolute overflow-hidden">
                        <img data-layer="Vector" data-node-id="325-2266" className="Vector w-[12.37px] h-[7.13px] left-[3.91px] top-[6.94px] absolute" src="/assets/325-2266.svg" />
                      </div>
                    </div>
                    <div data-layer="Background" data-node-id="325-2267" className="Background w-[20.20px] h-7 left-0 top-0 absolute bg-black" />
                  </div>
                </div>
                <img data-layer="Container 1" data-node-id="325-2268" className="Container1 w-[768px] h-[697px] left-0 top-[-1px] absolute" src="/assets/325-2268.webp" />
              </div>
            </div>
          <div data-layer="Footer" data-node-id="325-2269" className="Footer w-[1920px] h-[51.19px] left-0 top-[39040px] absolute bg-[#fce0e0]">
              <div data-layer="© ゆい整骨院" data-node-id="325-2270" className="left-[921.95px] top-[18px] absolute text-center justify-center text-[#333333] text-xs font-medium font-['YuGothic']">© ゆい整骨院</div>
            </div>
        </div>
      </div>
    </div>
  )
}
