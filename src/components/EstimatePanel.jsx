import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import productsData from '../data/productsData';
import SearchableDropdown from './SearchableDropdown';
import {
  getStates,
  getDistrictsForState,
  getPincodesForDistrict,
} from '../data/indiaLocations';

const MIN_ORDER = 3000;

const EstimatePanel = () => {
  const {
    cartItems,
    isEstimatePanelOpen,
    setIsEstimatePanelOpen,
    getItemQuantity,
    addItem,
    removeItem,
  } = useCart();

  const [isClosing, setIsClosing] = useState(false);

  /* ── Form state ─────────────────────────────────────────── */
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    district: '',
    city: '',
    pincode: '',
  });

  const [billingForm, setBillingForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    pincode: '',
  });

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [includeGst, setIncludeGst] = useState(false);
  const [notes, setNotes] = useState('');

  /* ── Validation state ───────────────────────────────────── */
  const [validationErrors, setValidationErrors] = useState({});
  const [validationMsg, setValidationMsg] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: false }));
    }
    if (validationMsg) setValidationMsg('');
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingForm((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  /* ── Dependent Dropdown Handlers ────────────────────────── */
  const handleStateChange = (selectedState) => {
    setForm((prev) => ({
      ...prev,
      state: selectedState,
      district: '', // Reset dependent district
      pincode: '', // Reset dependent pincode
    }));
    setValidationErrors((prev) => ({
      ...prev,
      state: false,
      district: false,
      pincode: false,
    }));
    if (validationMsg) setValidationMsg('');
  };

  const handleDistrictChange = (selectedDistrict) => {
    setForm((prev) => ({
      ...prev,
      district: selectedDistrict,
      pincode: '', // Reset dependent pincode
    }));
    setValidationErrors((prev) => ({
      ...prev,
      district: false,
      pincode: false,
    }));
    if (validationMsg) setValidationMsg('');
  };

  const handlePincodeChange = (selectedPincode) => {
    setForm((prev) => ({
      ...prev,
      pincode: selectedPincode,
    }));
    setValidationErrors((prev) => ({
      ...prev,
      pincode: false,
    }));
    if (validationMsg) setValidationMsg('');
  };

  /* Options calculation */
  const stateOptions = getStates();
  const districtOptions = form.state ? getDistrictsForState(form.state) : [];
  const pincodeOptions =
    form.state && form.district
      ? getPincodesForDistrict(form.state, form.district)
      : [];

  /* ── Close with animation ───────────────────────────────── */
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsEstimatePanelOpen(false);
      setIsClosing(false);
    }, 300);
  };

  /* Lock body scroll when open & reset validation state */
  useEffect(() => {
    if (isEstimatePanelOpen) {
      document.body.style.overflow = 'hidden';
      setValidationErrors({});
      setValidationMsg('');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isEstimatePanelOpen]);

  if (!isEstimatePanelOpen) return null;

  /* ── Calculations ───────────────────────────────────────── */
  const cartProducts = cartItems
    .map((item) => {
      const product = productsData.find((p) => p.id === item.productId);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const netAmount = cartProducts.reduce(
    (sum, p) => sum + p.originalPrice * p.quantity,
    0,
  );
  const finalAmount = cartProducts.reduce(
    (sum, p) => sum + p.offerPrice * p.quantity,
    0,
  );
  const youSave = netAmount - finalAmount;
  const shippingFee = 0;
  const estimateTotal = finalAmount + shippingFee;
  const shortfall = MIN_ORDER - estimateTotal;

  /* ── Submit Validation ──────────────────────────────────── */
  const handleSubmit = () => {
    /* 1. FIRST Check: Minimum order ₹3,000 total amount requirement */
    if (cartProducts.length === 0) {
      setValidationMsg('Your cart is empty. Please add products to submit an estimate.');
      return;
    }

    if (estimateTotal < MIN_ORDER) {
      setValidationMsg(
        `Minimum order is ₹${MIN_ORDER.toLocaleString('en-IN')}. Please add ₹${shortfall.toLocaleString('en-IN')} more to submit.`,
      );
      return;
    }

    /* 2. Validate required User Details fields */
    const errors = {};
    const missingFields = [];

    if (!form.firstName.trim()) {
      errors.firstName = true;
      missingFields.push('First name');
    }
    if (!form.lastName.trim()) {
      errors.lastName = true;
      missingFields.push('Last name');
    }
    if (!form.email.trim()) {
      errors.email = true;
      missingFields.push('Email');
    }
    if (!form.phone.trim()) {
      errors.phone = true;
      missingFields.push('Phone number');
    }
    if (!form.address.trim()) {
      errors.address = true;
      missingFields.push('Shipping address');
    }
    if (!form.state) {
      errors.state = true;
      missingFields.push('State');
    }
    if (!form.district) {
      errors.district = true;
      missingFields.push('District');
    }
    if (!form.city.trim()) {
      errors.city = true;
      missingFields.push('City');
    }
    if (!form.pincode) {
      errors.pincode = true;
      missingFields.push('Pincode');
    }

    /* 3. Validate billing fields if unchecked */
    if (!billingSameAsShipping) {
      if (!billingForm.firstName.trim()) {
        errors.billingFirstName = true;
        missingFields.push('Billing First name');
      }
      if (!billingForm.lastName.trim()) {
        errors.billingLastName = true;
        missingFields.push('Billing Last name');
      }
      if (!billingForm.address.trim()) {
        errors.billingAddress = true;
        missingFields.push('Billing Address');
      }
      if (!billingForm.city.trim()) {
        errors.billingCity = true;
        missingFields.push('Billing City');
      }
      if (!billingForm.pincode.trim()) {
        errors.billingPincode = true;
        missingFields.push('Billing Pincode');
      }
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setValidationMsg(
        `Please complete required fields: ${missingFields.join(', ')}.`,
      );

      /* Scroll to first error field */
      const firstErrKey = Object.keys(errors)[0];
      const targetEl = document.getElementById(`field-${firstErrKey}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    /* All valid -> submit via WhatsApp */
    setValidationErrors({});
    setValidationMsg('');

    let msg = `*VK Crackers — Estimate Request*\n\n`;
    msg += `*Items:*\n`;
    cartProducts.forEach((p) => {
      msg += `• ${p.name} (${p.unit}) × ${p.quantity} = ₹${(p.offerPrice * p.quantity).toLocaleString('en-IN')}\n`;
    });
    msg += `\n*Estimate Total:* ₹${estimateTotal.toLocaleString('en-IN')}`;
    msg += `\n*You Save:* ₹${youSave.toLocaleString('en-IN')}`;
    msg += `\n\n*Customer:* ${form.firstName} ${form.lastName}`;
    msg += `\n*Phone:* ${form.phone}`;
    msg += `\n*Email:* ${form.email}`;
    msg += `\n*Shipping Address:* ${form.address}, ${form.city}, ${form.district}, ${form.state} - ${form.pincode}`;

    if (!billingSameAsShipping) {
      msg += `\n*Billing Address:* ${billingForm.address}, ${billingForm.city} - ${billingForm.pincode} (${billingForm.firstName} ${billingForm.lastName})`;
    }

    if (includeGst) msg += `\n*GST Mode:* Intra-State (CGST + SGST), Inclusive`;
    if (notes) msg += `\n*Notes:* ${notes}`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919514407348?text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-[101] h-full w-full sm:w-[480px] md:w-[520px] max-w-full bg-dark-900 border-l border-primary-500/20 shadow-2xl flex flex-col ${isClosing ? 'estimate-panel-exit' : 'estimate-panel-enter'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-white/10 shrink-0">
          <h2 className="text-base sm:text-xl font-bold font-heading text-white tracking-tight">
            YOUR ESTIMATE
          </h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close estimate panel"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 sm:py-5 space-y-5 sm:space-y-6">

          {/* ── Cart Items ────────────────────────────────── */}
          {cartProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">🛒</div>
              <p className="text-gray-400 text-sm">Your cart is empty</p>
              <p className="text-gray-500 text-xs mt-1">Add products to get started</p>
            </div>
          ) : (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary-400 font-semibold mb-3">
                Cart Items ({cartProducts.length})
              </h3>
              <div className="space-y-3">
                {cartProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-3 bg-dark-800 rounded-xl p-3 border border-white/5"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{p.name}</p>
                      <p className="text-xs text-gray-400">{p.unit}</p>
                      <p className="text-xs text-primary-400 font-medium mt-0.5">
                        ₹{p.offerPrice.toLocaleString('en-IN')} × {p.quantity} = ₹{(p.offerPrice * p.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => removeItem(p.id)}
                        className="w-7 h-7 rounded-md bg-dark-700 hover:bg-dark-600 text-white text-sm font-bold flex items-center justify-center cursor-pointer"
                      >
                        −
                      </button>
                      <span className="text-white text-sm font-medium w-6 text-center">{p.quantity}</span>
                      <button
                        onClick={() => addItem(p.id)}
                        className="w-7 h-7 rounded-md bg-primary-500 hover:bg-primary-400 text-dark-900 text-sm font-bold flex items-center justify-center cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Estimate Summary ──────────────────────────── */}
          {cartProducts.length > 0 && (
            <div className="bg-dark-800/60 rounded-xl p-4 border border-white/5 space-y-2.5">
              <h3 className="text-xs uppercase tracking-widest text-primary-400 font-semibold mb-2">
                Estimate Summary
              </h3>
              <div className="flex justify-between text-sm text-gray-300">
                <span>Net amount</span>
                <span>₹{netAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm text-emerald-400">
                <span>You save</span>
                <span>− ₹{youSave.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>Final amount</span>
                <span>₹{finalAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>Shipping fee</span>
                <span className="text-emerald-400">{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
              </div>
              <div className="border-t border-white/10 pt-2.5 flex justify-between text-base font-bold text-white">
                <span>Estimate Total</span>
                <span className="text-primary-400">₹{estimateTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          )}

          {/* ── Minimum Order Warning ─────────────────────── */}
          {cartProducts.length > 0 && shortfall > 0 && (
            <div className="bg-accent-red/10 border border-accent-red/30 rounded-xl px-4 py-3 text-sm text-red-300">
              <span className="font-semibold">Minimum order is ₹{MIN_ORDER.toLocaleString('en-IN')}.</span>{' '}
              Add ₹{shortfall.toLocaleString('en-IN')} more to submit.
            </div>
          )}

          {/* ── Validation Error Alert Banner ─────────────── */}
          {validationMsg && (
            <div className="bg-accent-red/15 border border-accent-red/40 rounded-xl px-4 py-3 text-xs sm:text-sm text-red-200 animate-fade-in flex items-start gap-2.5">
              <span className="text-base shrink-0">⚠️</span>
              <span>{validationMsg}</span>
            </div>
          )}

          {/* ── Your Details ──────────────────────────────── */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-primary-400 font-semibold mb-3">
              Your Details
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {/* First Name */}
              <div id="field-firstName" className="col-span-1">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleFormChange}
                  placeholder="First name *"
                  className={`w-full bg-dark-800 border rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    validationErrors.firstName
                      ? 'border-accent-red ring-1 ring-accent-red/50'
                      : 'border-white/10 focus:border-primary-500/50'
                  }`}
                />
              </div>

              {/* Last Name */}
              <div id="field-lastName" className="col-span-1">
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleFormChange}
                  placeholder="Last name *"
                  className={`w-full bg-dark-800 border rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    validationErrors.lastName
                      ? 'border-accent-red ring-1 ring-accent-red/50'
                      : 'border-white/10 focus:border-primary-500/50'
                  }`}
                />
              </div>

              {/* Email */}
              <div id="field-email" className="col-span-2">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  placeholder="Email *"
                  type="email"
                  className={`w-full bg-dark-800 border rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    validationErrors.email
                      ? 'border-accent-red ring-1 ring-accent-red/50'
                      : 'border-white/10 focus:border-primary-500/50'
                  }`}
                />
              </div>

              {/* Phone */}
              <div id="field-phone" className="col-span-2">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  placeholder="Phone *"
                  type="tel"
                  className={`w-full bg-dark-800 border rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    validationErrors.phone
                      ? 'border-accent-red ring-1 ring-accent-red/50'
                      : 'border-white/10 focus:border-primary-500/50'
                  }`}
                />
              </div>

              {/* Address */}
              <div id="field-address" className="col-span-2">
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleFormChange}
                  placeholder="Shipping address *"
                  rows={2}
                  className={`w-full bg-dark-800 border rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
                    validationErrors.address
                      ? 'border-accent-red ring-1 ring-accent-red/50'
                      : 'border-white/10 focus:border-primary-500/50'
                  }`}
                />
              </div>

              {/* 1. STATE — Searchable Dropdown */}
              <div className="col-span-1">
                <SearchableDropdown
                  name="state"
                  placeholder="Select state *"
                  searchPlaceholder="Search state..."
                  options={stateOptions}
                  value={form.state}
                  onChange={handleStateChange}
                  hasError={validationErrors.state}
                />
              </div>

              {/* 2. DISTRICT — Dependent Searchable Dropdown */}
              <div className="col-span-1">
                <SearchableDropdown
                  name="district"
                  placeholder="Select district *"
                  searchPlaceholder="Search district..."
                  options={districtOptions}
                  value={form.district}
                  onChange={handleDistrictChange}
                  disabled={!form.state}
                  disabledMessage="Select state first"
                  hasError={validationErrors.district}
                />
              </div>

              {/* City */}
              <div id="field-city" className="col-span-1">
                <input
                  name="city"
                  value={form.city}
                  onChange={handleFormChange}
                  placeholder="City *"
                  className={`w-full bg-dark-800 border rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    validationErrors.city
                      ? 'border-accent-red ring-1 ring-accent-red/50'
                      : 'border-white/10 focus:border-primary-500/50'
                  }`}
                />
              </div>

              {/* 3. PINCODE — Dependent Searchable Dropdown */}
              <div className="col-span-1">
                <SearchableDropdown
                  name="pincode"
                  placeholder="Select pincode *"
                  searchPlaceholder="Search pincode..."
                  options={pincodeOptions}
                  value={form.pincode}
                  onChange={handlePincodeChange}
                  disabled={!form.district}
                  disabledMessage="Select district first"
                  hasError={validationErrors.pincode}
                />
              </div>
            </div>
          </div>

          {/* ── Billing ────────────────────────────────────── */}
          <div className="space-y-3">
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={billingSameAsShipping}
                onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                className="w-4 h-4 rounded accent-primary-500 cursor-pointer"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Billing same as shipping
              </span>
            </label>

            {/* Separate Billing Form if unchecked */}
            {!billingSameAsShipping && (
              <div className="pt-2 pl-2 border-l-2 border-primary-500/30 space-y-3 animate-fade-in">
                <h4 className="text-xs font-semibold text-primary-400 uppercase tracking-wider">
                  Billing Details
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    name="firstName"
                    value={billingForm.firstName}
                    onChange={handleBillingChange}
                    placeholder="Billing First Name *"
                    className={`col-span-1 bg-dark-800 border rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none ${
                      validationErrors.billingFirstName
                        ? 'border-accent-red'
                        : 'border-white/10'
                    }`}
                  />
                  <input
                    name="lastName"
                    value={billingForm.lastName}
                    onChange={handleBillingChange}
                    placeholder="Billing Last Name *"
                    className={`col-span-1 bg-dark-800 border rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none ${
                      validationErrors.billingLastName
                        ? 'border-accent-red'
                        : 'border-white/10'
                    }`}
                  />
                  <input
                    name="address"
                    value={billingForm.address}
                    onChange={handleBillingChange}
                    placeholder="Billing Address *"
                    className={`col-span-2 bg-dark-800 border rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none ${
                      validationErrors.billingAddress
                        ? 'border-accent-red'
                        : 'border-white/10'
                    }`}
                  />
                  <input
                    name="city"
                    value={billingForm.city}
                    onChange={handleBillingChange}
                    placeholder="Billing City *"
                    className={`col-span-1 bg-dark-800 border rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none ${
                      validationErrors.billingCity
                        ? 'border-accent-red'
                        : 'border-white/10'
                    }`}
                  />
                  <input
                    name="pincode"
                    value={billingForm.pincode}
                    onChange={handleBillingChange}
                    placeholder="Billing Pincode *"
                    className={`col-span-1 bg-dark-800 border rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none ${
                      validationErrors.billingPincode
                        ? 'border-accent-red'
                        : 'border-white/10'
                    }`}
                  />
                </div>
              </div>
            )}

            <label className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={includeGst}
                onChange={(e) => setIncludeGst(e.target.checked)}
                className="w-4 h-4 rounded accent-primary-500 cursor-pointer"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Include GST on estimate
              </span>
            </label>
          </div>

          {/* ── GST Info ───────────────────────────────────── */}
          {includeGst && (
            <div className="bg-dark-800/60 rounded-xl p-4 border border-white/5 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">GST mode</span>
                <span className="text-white font-medium">Intra-State (CGST + SGST)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">GST type</span>
                <span className="text-white font-medium">GST Inclusive (tax included)</span>
              </div>
            </div>
          )}

          {/* ── Notes ──────────────────────────────────────── */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-primary-400 font-semibold mb-2">
              Notes
            </h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Delivery date, preferences..."
              rows={3}
              className="w-full bg-dark-800 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
            />
          </div>
        </div>

        {/* ── Footer / Submit ─────────────────────────────── */}
        <div className="px-5 py-4 border-t border-white/10 shrink-0 space-y-3">
          {cartProducts.length > 0 && shortfall > 0 && (
            <p className="text-xs text-red-400 text-center">
              Minimum order is ₹{MIN_ORDER.toLocaleString('en-IN')}. Add ₹{shortfall.toLocaleString('en-IN')} more to submit.
            </p>
          )}
          <button
            onClick={handleSubmit}
            className={`w-full py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              cartProducts.length > 0 && shortfall <= 0
                ? 'bg-gradient-to-r from-primary-500 to-amber-500 text-dark-900 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary-500/20'
                : 'bg-dark-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Estimate
          </button>
        </div>
      </div>
    </>
  );
};

export default EstimatePanel;

