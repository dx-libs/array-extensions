// unique
Array.prototype.unique = function (getKeys = undefined) {
  const array = this;
  if (getKeys) {
    const UNDEFINED_ITEM = new Object();
    return array
      .map(getKeys)
      .map((item, pos, keys) => keys.indexOf(item) == pos)
      .filter((item, pos) => item)
      .map((item, pos) => array[pos])
  }

  return this
    .filter((item, pos) => {
      // console.log(array[pos].id, array.length, array.indexOf(item), pos);
      return array.indexOf(item) == pos;
    });
};

// diff
Array.prototype.diff = function (array) {
  return this.filter((i, p) => array.indexOf(i) === -1);
};

// remove
Array.prototype.remove = function (itemOrArray) {
  return this.filter((i, p) => (itemOrArray instanceof Array ? itemOrArray : [itemOrArray]).indexOf(i) === -1);
};

// group
Array.prototype.group = function (fn, fnConvert = undefined) {
  const r = {};
  const convert = typeof fnConvert === 'function';
  for (let i = 0; i < this.length; i++) {
    const key = fn ? fn(this[i]) : this[i];

    r[key] = r[key] || [];
    r[key].push(convert ? fnConvert(this[i], i) : this[i]);
  }
  return r; //Object.keys(r).map(k => r[k]);
};

// groupArray
Array.prototype.groupArray = function (fn, fnConvert = undefined) {
  const convert = typeof fnConvert === 'function';
  const r = this.group(fn, fnConvert);
  const keys = Object.keys(r);
  const arr = [];

  for (let i = 0; i < keys.length; i++) {
    arr.push({ key: keys[i], values: r[keys[i]], index: i });
  }

  return arr;
};

// random
Array.prototype.random = function (quantity = this.length) {
  const arr = [];
  for (let n = 0; n < quantity; n++) {
    const r = Math.random() * this.length;
    const i = Math.floor(r);

    arr.push(this[i]);
  }

  return arr;
};

// shuffle
Array.prototype.shuffle = function () {
  const arr = this;
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// sum
Array.prototype.sum = function () {
  const arr = this.flat();
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    n += arr[i];
  }
  return n;
};

// mul
Array.prototype.mul = function () {
  const arr = this.flat();
  let n = 1;
  for (let i = 0; i < arr.length; i++) {
    n *= arr[i];
  }
  return n;
};

// avg
Array.prototype.avg = function (...args) {
    const arr = this.flat();
  if (!arr.length) return 0;

  return (arr.sum(...args)) / arr.length;
};

// flat
Array.prototype.flat = Array.prototype.flat || function (deep = 2) {
  const arr = this;

  return arr.reduce((a, v) => Array.isArray(v) ? a.concat(v.flat()) : a.concat(v), []);
};

// toPromise
Array.prototype.toPromise = function () {
  return Promise.all(this);
};