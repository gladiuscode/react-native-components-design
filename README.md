# Composition vs Configuration

## Configuration
A component built with this technique lets a consumer
customize its appearance through a set of props.
For example we could have a ProductCard component that
is basically the same across multiple screens, but in some
of them it is missing a piece or has one different piece
that is required only for that particular feature, so to
hide or show such piece, we leverage a set of props and
implement some conditions to properly display it.

**Pros**:
1. Quick and easy to use. Different functionality and visual variants can be controlled by configuring props.
2. Configuration API via props makes it harder to diverge from the design system and keeps the UI and behaviour consistent.

**Cons**:
1. Adding more features requires more props and conditional logic. Thus a component becomes harder to maintain.
2. Not easy to extend.
3. Not easy to override
4. If a component can't be extended, a new version might need to be built.
 
## Composition
A component build with this technique lets a consumer 
build it up using Units, subcomponents that take care
of a specific piece of its UI.
A user can compose how that same component should appear
and do so without props implemented to hide or show such
pieces.

This pattern can be implemented using children property or
by passing components as props.

**Pros**: 
1. Extremely flexible
2. It's easy to create different functionality and UI variants and add new building blocks.
3. Makes a component library much more resistant to change

**Cons**:
1. You need to compose the building blocks yourself to create a fully functioning component/feature.
2. Takes more time and code.
3. It's easy to diverge from the design system and ship inconsistent UI and behaviour.

### Links

1. [Composition Pattern In React](https://dev.to/ricardolmsilva/composition-pattern-in-react-28mj)
2. [Composition vs Configuration](https://dev.to/anuradha9712/configuration-vs-composition-design-reusable-components-5h1f)
3. [Composition vs Configuration: Design Reusable Components](https://portal.gitnation.org/contents/composition-vs-configuration-how-to-build-flexible-resilient-and-future-proof-components)
