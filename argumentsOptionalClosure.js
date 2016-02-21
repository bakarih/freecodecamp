function isNumber(arg)
{
  if (typeof arg === 'number')
  {
    return true;
  }
  else return false;
}

function add() 
{
  if (arguments.length === 2)
  { 
    if (isNumber(arguments[0]) && isNumber(arguments[1]))
    {
      return arguments[0] + arguments[1];
    }
    else return undefined;
  }
  else if (arguments.length === 1)
  {
    var x = arguments[0];
    if (!isNumber(x))
    {
      return undefined;
    }
    else return function(y)
    {
      if (isNumber(y))
      {
        return x + y;
      }
      else return undefined;
    };
  }
}

add(2,3);
