# Practical exercises

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript-n4pvco)

The repo is meant to serve as a bad example.

Improve the code's readability and maintainability by fulfilling the given tasks using the learned principles.

## Exercise block 1
### 1) What's the point?
The `Rectangle` and `Circle` interfaces both define the properties `x` and `y`.

Instead make them inherit the interface `Point`.

_You will need to modify `shape.ts`._

### 2) It's taking shape
Rectangles, triangles and sphere are all shapes. Using the union type, create a `Shape`.

_You will need to modify `shape.ts`._

### 3) One shape to rule them all
There are 3 very similar functions in `draw.ts` - `drawRectangle`, `drawTriangle` and `drawCircle`.

Replace them with the single function `drawShape`. It should accept an argument of type `Shape` (which we created in the previous task).

To differentiate between each shape within the function you may use:
```
if ('width' in shape) {
    // .. rectangle-specific code here
}
if ('point1' in shape) {
    // .. triangle-specific code here
}
if ('radius' in shape) {
    // .. circle-specific code here
}
```

_You will need to modify `draw.ts` and `index.ts`._

### 4) Make the list-storage generic
Currently, the `ListStorage` allows us to store, retrieve and count objects of type `any`. Use generics so we no longer bypass TypeScript's type system.

Don't forget that `triangleStorage`, `rectangleStorage` and `circleStorage` need to explicitly set the generic's type when calling `ListStorage`'s constructor.

_You will need to modify `list-storage.ts`._