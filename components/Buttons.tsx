import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Buttons({ pressHandler, Icon, stylesText, title, stylesButton }) {
  const RenderContentIconOrText = () => {
    if (!Icon) {
      return <Text style={stylesText}>{title && title}</Text>;
    } else {
      return Icon;
    }
  };

  return (
    <TouchableOpacity
      style={stylesButton}
      onPress={pressHandler && pressHandler}
    >
      <RenderContentIconOrText />
    </TouchableOpacity>
  );
}

export default Buttons;
