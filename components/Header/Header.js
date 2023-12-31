import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import HeaderStyles from "./styled";

const Header = () => {
  const [indices, setIndices] = useState({
    kosdaq: 0,
    kospi: 0,
  });
  const [isKosdaqVisible, setIsKosdaqVisible] = useState(true);

  const updateIndices = () => {
    setIndices({
      kosdaq: Math.random() * 1000,
      kospi: Math.random() * 3000,
    });
  };

  useEffect(() => {
    // 일정 간격으로 가상의 코스피, 지수 업데이트
    const intervalId = setInterval(() => {
      updateIndices();
      setIsKosdaqVisible((prev) => !prev);
    }, 5000);

    // 컴포넌트가 언마운트되면 interval 제거
    return () => clearInterval(intervalId);
  }, []);

  //화면 구성
  return (
    <View style={HeaderStyles.container}>
      <Text style={HeaderStyles.title}> H&H 베타</Text>
      <Text style={HeaderStyles.index}>
        {isKosdaqVisible ? (
          <>
            <Text style={HeaderStyles.word}>코스닥: </Text>
            <Text style={HeaderStyles.number}>{indices.kosdaq.toFixed(2)}</Text>
          </>
        ) : (
          <>
            <Text style={HeaderStyles.word}>코스피: </Text>
            <Text style={HeaderStyles.number}>{indices.kospi.toFixed(2)}</Text>
          </>
        )}
      </Text>
    </View>
  );
};

export default Header;
