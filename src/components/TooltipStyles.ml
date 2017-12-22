open Css

let container = style [
  position Relative;
  display InlineBlock;
  zIndex 50;
]

let tooltip = let size = 0.5 in style [
  position Absolute;
  zIndex 55;
  bottom (pct 100.);
  left (pct 50.);
  transform (translate (pct (-50.)) (em (-.size)));

  selector "&::before" [
    position Absolute;
    width zero;
    height zero;
    bottom (em (-.size));
    left (pct 50.);
    marginLeft (em (-.size));
    borderLeft (em size) Solid (Obj.magic "transparent");
    borderRight (em size) Solid (Obj.magic "transparent");
    borderTop (em size) Solid (hex "eee");
    unsafe "content" " ";
    zIndex 60;
  ]
]