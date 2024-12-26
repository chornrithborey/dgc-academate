
const svgToIcon = (svg: string) => {
    return (
      <img
        src={svg}
        alt="icon"
        style={{ width: 25, height: 25}}
      />
    );
  };

export default svgToIcon;