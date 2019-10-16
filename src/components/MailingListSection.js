import React, { Component } from "react";
import { toUpper, isEmpty } from "lodash";
import addToMailchimp from "gatsby-plugin-mailchimp";
import classNames from "classnames";
import FacebookIcon from "react-icons/lib/fa/facebook-square";
import MailIcon from "react-icons/lib/fa/envelope";
import InstagramIcon from "react-icons/lib/fa/instagram";
//import DiscordIcon from "react-icons/lib/fa/discord";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import Input from "../common/Input";
import Row from "../common/Row";
import Anchor from "../common/Anchor";
import HTMLContent from "../common/HTMLContent";
/*
<a href="https://discord.gg/APdaNBb" target="_blank" rel="noopener noreferrer">
              <DiscordIcon />
            </a>
*/

const PACKAGE_NAME = "mailing-list-section-component";
const SECTION_HEADER_CLASS_NAME = "mailing-list-section-header";

class MailingListSection extends Component {
  state = {
    email: null,
    result: null,
    message: "",
  }

  resetState = () => setTimeout(() => this.setState({ result: null, message: "" }), 3000);

  // TODO: fix this by adding the required fields for the form
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    try {
      addToMailchimp(this.state.email)
        .then(result => {
          // Mailchimp always returns a 200 response
          // So we check the result for MC errors & failures
          if (result.result !== `success`) {
            this.setState({
              status: `error`,
              message: result.msg,
            }, this.resetState)
          } else {
            // Email address succesfully subcribed to Mailchimp
            this.setState({
              status: `success`,
              message: result.msg,
            }, this.resetState)
          }
        })
        .catch(err => {
          // Network failures, timeouts, etc
          this.setState({
            status: `error`,
            message: err,
          }, this.resetState)
        })
    } catch (error) {
      this.setState({
        status: `error`,
        message: "Invalid email entered",
      }, this.resetState)
    }
  }

  renderContent() {
    return (
      <SectionHeader text="Join our mailing list" className={classNames(SECTION_HEADER_CLASS_NAME, this.props.isInModal && "is-in-modal")}>
        <HTMLContent html={this.state.message} />
        <Row className="input-row">
        <!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://facebook.us16.list-manage.com/subscribe/post?u=5ae11bc484c4c935998f1fcbc&amp;id=01b1dca7fa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address (Preferred)  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="LNAME" class="required" id="mce-LNAME">
</div>
<div class="mc-field-group input-group">
    <strong>Are you a current UTD student? </strong>
    <ul><li><input type="radio" value="Yes" name="STUDENT" id="mce-STUDENT-0"><label for="mce-STUDENT-0">Yes</label></li>
<li><input type="radio" value="No (It's okay if you aren't)" name="STUDENT" id="mce-STUDENT-1"><label for="mce-STUDENT-1">No (It's okay if you aren't)</label></li>
</ul>
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5ae11bc484c4c935998f1fcbc_01b1dca7fa" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='STUDENT';ftypes[3]='radio';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
        </Row>
        {
          this.props.isInModal ?
          <Row className="links-row"> 
            <a href="https://www.facebook.com/animationutd/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="mailto:utdanimationguild@gmail.com" target="_blank" rel="noopener noreferrer">
              <MailIcon />
            </a>
            <a href="https://www.instagram.com/utdallas_ag/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> 
            </a>
            
          </Row> :
          <Row className="links-row" /> 
        }
      </SectionHeader>
    )
  }

  render() {
    if (this.props.isInModal) {
      return this.renderContent();
    }

    return (
      <section className={PACKAGE_NAME}>
        <div className="container">
          {this.renderContent()}
        </div>
      </section>
    )
  }
};

export default MailingListSection;
