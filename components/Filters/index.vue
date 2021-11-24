<template>
  <nav>
    <h2>Filter</h2>
    <ul>
      <li>
            <a class="grey" href="#">Category</a>
            <label class="container">Flats
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
            </label>
            <label class="container">Sneakers
            <input type="checkbox" />
            <span class="checkmark"></span>
            </label>
            <label class="container">Heels
            <input type="checkbox" />
            <span class="checkmark"></span>
            </label>
            <label class="container">Boots
            <input type="checkbox" />
            <span class="checkmark"></span>
            </label>
      </li>
      <li>
            <a class="grey" href="#">Price</a>
            <label class="container">Rp 100,000 - Rp 200,000
            <input type="radio" name="radio">
            <span class="checkmark-radio"></span>
            </label>
            <label class="container">Rp 200,000 - Rp 300,000
            <input type="radio" checked="checked" name="radio">
            <span class="checkmark-radio"></span>
            </label>
            <label class="container">Rp 300,000 and above
            <input type="radio" name="radio">
            <span class="checkmark-radio"></span>
            </label>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "./style.scss";
</style>