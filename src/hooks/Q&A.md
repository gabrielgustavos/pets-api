# The order of states matter?
- No, the order of states does not matter. The state machine will always
  transition to the next state in the list.

# What happens if a state is not defined?
- If a state is not defined, the state machine will transition to the
  next state in the list.

# Can we have multiples effects?
- Yes, you can have multiple effects. The state machine will execute
  all the effects in the list. 

# What is the purpose of using useEffect inside this custom hook instead havin a normal function?
- The purpose of using useEffect is to make sure that the state machine
  will only transition to the next state when the effect is completed.
  This is useful when you want to make sure that the state machine
  will not transition to the next state until the effect is completed.

# What is the purpose of using useReducer instead of useState?
-  We use useReducer instead of useState because we want to have a
   centralized state machine. This is useful when you want to have a
   centralized state machine that can be used by multiple components.