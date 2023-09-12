# Practical exercises

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript-n4pvco)

The repo is meant to serve as a bad example.

Improve the code's readability and maintainability by fulfilling the given tasks using the learned principles.

## Exercise block 2
### 6) Telling shapes apart
When drawing a shape, we need to differentiate if we are dealing with a triangle, rectangle or circle. To make this easier and less error-prone we want to introduce discriminating unions to them.

To do that, first add a discriminating union type identifier to `Rectangle`, `Triangle` and `Circle`.

Then, within the function `drawShape`, replace the `if`-statements with `switch` cases. Each case should now use the discriminating property to assert the exact type of shape.

_You will first need to modify `shape.ts`, then `draw.ts`._

### 7) Feeling exhausted?
If we add a `Square` in the future, the `switch` in the function `drawShape` will not complain with any errors or warnings, even though it doesn't deal with the `Square`.

Use exhaustive type checking so our compiler works for us and tells us if we have forgotten a `Shape`.

_You will need to modify `draw.ts`._

### 8) (Optional) Logging to exhaustion
Use exhaustive type checking in the function `logShape`.

You may use 
- `console.log('Drew rectangle: ' + JSON.stringify(shape))`, 
- `console.log('Drew triangle: ' + JSON.stringify(shape))` and 
- `console.log('Drew circle: ' + JSON.stringify(shape))`.

_You will need to modify `logger.ts`._

### 9) (Optional) Adding a hexagon
Add a new shape `Hexagon`. Create a new function `drawHexagonToContext`, a button on the UI and so on.

_You will need to modify `shape.ts`, `index.html`, `index.ts` and `draw.ts`._

### 10) Squaring a rectangle
Add a new shape `Square` which inherits from `Rectangle`. Because a rectangle has the property `height` which a square doesn't need, use the utility type `Omit`.

Create a new function `drawSquareToContext`, a button on the UI and so on.

_You will need to modify `shape.ts`, `index.html`, `index.ts` and `draw.ts`._

### 11) Type guards
Why do we need a separate function `drawSquareToContext` if `drawRectangleToContext` does almost the same?

Implement a type guard to check for a `Square`, remove `drawSquareToContext` and instead extend `drawRectangleToContext` to work with squares as well.

_You will need to modify `draw.ts`._

### 12) Don't touch!
Makes all types and interfaces inside `shape.ts` read-only.

_You will need to modify `shape.ts`._