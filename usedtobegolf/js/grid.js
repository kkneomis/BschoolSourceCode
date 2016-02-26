(function() {
  var eft;
  $.gridSize = function() {
    var inWidth;
    inWidth = window.innerWidth;
    if (inWidth > 1200) {return 4;}
    if (inWidth > 900) {return 3;}
    if (inWidth > 600) {return 2;}
    return 1;
  };
  $.fillArray = function(len, val) {
    var arr;
    arr = [];
    while (len-- > -1) {
      arr[len] = val;
    }
    return arr;
  };
  $.resizeGrid = function(columns) {
    var shifts;
    shifts = $.fillArray($(".grid .item").length, 0);
    $(".grid .tall").each(function(_i, element) {
      var index, _results;
      index = $(element).prevAll().length;
      index += columns;
      _results = [];
      while (index < shifts.length) {
        shifts[index] += 1;
        _results.push(index += columns);
      }
      return _results;
    });
    $(".grid .item").each(function(ind, element) {
      $(element).removeClass("shift0 shift1 shift2 shift3 shift4 shift5");
      return $(element).addClass("shift" + shifts[ind]);
    });
  };

  $(window).resize(function() {
    if ($.currentGridSize != null) {
      if ($.gridSize() !== $.currentGridSize) {
        $.resizeGrid($.gridSize());
        return $.currentGridSize = $.gridSize();
      }
    }
  });

  $(function() {
    $.currentGridSize = $.gridSize();
    $.resizeGrid($.currentGridSize);
    return true;
  });
}).call(this);
