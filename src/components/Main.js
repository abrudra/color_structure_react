import data from "../data/colors.json";
function Main() {
  const manageCount = (index) => {
    const count = index * 100;
    switch (index) {
      case 0:
        return "50";
      case 1:
        return "100";

      default:
        return count; 
    }
  };
  return (
    <div class="row">
      {Object.keys(data).map(function (key, index1) {
        let temp = data[key];
        return (
          <>
            <div class="col-sm-2">
              <div className="row">
                <div className="col-sm-12 color-name">
                  <p className="font-main">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                </div>
                <div className="col-sm-12">
                  {index1 === 0
                    ? `color.cool${key.charAt(0).toUpperCase() + key.slice(1)}`
                    : `colors.${key.charAt(0).toUpperCase() + key.slice(1)}`}
                </div>
              </div>
            </div>
            <div class="col-sm-10">
              <div class="row">
                {Object.keys(temp).map(function (key, index) {
                  return (
                    <div
                      className="col-sm-2 info-clr"
                    >
                      <div className="row">
                        <div
                          className="col-sm-12 info-clr2"
                          style={{
                            backgroundColor: temp[key],
                          }}
                        ></div>
                        <div className="col-sm-6 ">{manageCount(index)}</div>
                        <div className="col-sm-6 textalign">{temp[key]}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Main;
