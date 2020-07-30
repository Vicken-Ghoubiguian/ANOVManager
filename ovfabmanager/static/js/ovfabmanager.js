$(document).ready(function(){

  $( document ).tooltip();

  $(".bouton_au_pied").button();

  $("input[type=submit]").button();

  $("input[type=reset]").button();

  $("#enregistrement_produit_validation").click(function(){

	var verif_var = true;

	$(":input.required-field-enregistrement_produit").each(function(){

		var input_value = $(this).val();

		if(input_value === "")
		{

			$(this).css("border-color", "#f8009b");

			console.log($(this))

			$("#product_error_div").removeClass("hidden_div");

			verif_var = false;
		}
	});

	if(verif_var)
	{
		$("#product_error_div").addClass("hidden_div");

		$(":input.required-field-enregistrement_produit").css("border-color","#ccc");

		$("#formulaire_enregistrement_stock").submit();
	}
  });

  $("#reinitialisation_enregistrement_produit").click(function(){

	$("#product_error_div").addClass("hidden_div");

	$(":input.required-field-enregistrement_produit").css("border-color","#ccc");

	$("#codebarre").val("");

	$("#date_d_achat").val("");

	$("#date_de_livraison").val("");

	$("#type_d_objet").val(0);

	document.getElementById("nouveau_produit").checked = false;

	$("#fabricant").val("");

        $("#adresse_email_fabricant").val("");

        $("#adresse_postale_fabricant").val("");

        $("#numero_telephone_fabricant").val("");

        $("#site_web_fabricant").val("");

	$("#fournisseur").val("");

	$("#adresse_email_fournisseur").val("");

	$("#adresse_postale_fournisseur").val("");

	$("#numero_telephone_fournisseur").val("");

	$("#site_web_fournisseur").val("");
  });

  $("#nouveau_produit").change(function(){

	if(document.getElementById("nouveau_produit").checked == true)
	{

		$("#fabricant").addClass("required-field-enregistrement_produit")

                $("#fournisseur").addClass("required-field-enregistrement_produit")

		$("#enregistrer_nouveau_produit").fadeIn("slow");
	}
	else
	{

		$("#fabricant").removeClass("required-field-enregistrement_produit")

		$("#fournisseur").removeClass("required-field-enregistrement_produit")

		$("#enregistrer_nouveau_produit").fadeOut("slow");
	}
  });

  $("#asDatatable").DataTable({
	"language": {
		"url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/French.json"
	}
  });

  $.datepicker.regional['fr'] = {
		
		prevText: '&#x3c;Préc',
		
		nextText: 'Suiv&#x3e;',
		
		monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
		
		monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun','Jul','Aou','Sep','Oct','Nov','Dec'],
		
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		
		dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
		
		dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
		
		weekHeader: 'Sm',
		
		dateFormat: 'dd/mm/yy',
		
		firstDay: 1,
		
		isRTL: false,
		
		showMonthAfterYear: false,
		
		yearSuffix: '',
		
		numberOfMonths: 1,
		
		showButtonPanel: false
  };
  
  $.datepicker.setDefaults($.datepicker.regional['fr']);

  $(".datepicker_amical").datepicker( $.datepicker.regional["fr"] );

  $("#jqTabs").tabs({show: {effect: "clip", duration: "slow"}});

  $(":input.required-field-enregistrement_produit").focus(function(){

	$(this).css("border-color", "#c5007b");

  });

  $(":input.required-field-enregistrement_produit").focusout(function(){

	$(this).css("border-color", "#ccc");

  });

  $(":input.required-field-connexion").focus(function(){

	$(this).css("border-color", "#c5007b");

  });

  $(":input.required-field-connexion").focusout(function(){

	$(this).css("border-color", "#ccc");

  });

  $("#personne_morale").click(function(){
	if($("#personne_morale").prop(":checked")){
		$("#personne_morale"). prop(":checked", false);

		$(".personne_moral_field").removeClass("input-container");
		$(".personne_moral_field").addClass("hidden_div");

		$(".personne_morale_input").removeAttr("required");

		$("#personne_morale_adresse_physique").val("");
		$("#personne_morale_nom").val("");

	} else {
		$("#personne_morale"). prop(":checked", true);

		$(".personne_moral_field").removeClass("hidden_div");
                $(".personne_moral_field").addClass("input-container");

		$(".personne_morale_input").attr("required","required");
	}
  });

  $("#autorisation_communication").click(function(){
        if($("#autorisation_communication").prop(":checked")){
                $("#autorisation_communication"). prop(":checked", false);
                alert("Autorisation communication is Unchecked");
        } else {
                $("#autorisation_communication"). prop(":checked", true);
                alert("Autorisation communication is Checked");
        }
  });

  $("#autorisation_informations_depuis_fablab").click(function(){
        if($("#autorisation_informations_depuis_fablab").prop(":checked")){
                $("#autorisation_informations_depuis_fablab"). prop(":checked", false);
                alert("Autorisation informations depuis fablab is Unchecked");
        } else {
                $("#autorisation_informations_depuis_fablab"). prop(":checked", true);
                alert("Autorisation informations depuis fablab is Checked");
        }
  });

  $("#acceptation_des_conditions").click(function(){
        if($("#acceptation_des_conditions").prop(":checked")){
                $("#acceptation_des_conditions"). prop(":checked", false);
                alert("Acceptation des conditions is Unchecked");
        } else {
                $("#acceptation_des_conditions"). prop(":checked", true);
                alert("Acceptation des conditions is Checked");
        }
  });

  $(".customized_checkbox").checkboxradio();

  $(".common").click(function(){ document.location.href = "http://127.0.0.1:8000/"; });

  $("#client_pret_carte").click(function(){
	$("#identification_client_par_carte").dialog({
                height: 800,
                resizable: false,
                width: 650,
                resizable: false,
                modal: true,
                show: {
                        effect: "size",
                        duration: 1000
                },
                hide: {
                        effect: "size",
                        duration: 1000
                },
                close: function(event, ui){
                        $("#client_card").val("");
                },
                buttons: {
                        "Valider": function()
			{

				$("#client_pret").val($("#client_card").val());

				$(this).dialog("close");
			},
                        "Réinitialiser": function()
                        {
                                $("#client_card").val("");
                        },
                }
        });
  });

  $("#client_retour_carte").click(function(){
	$("#identification_client_par_carte").dialog({
		height: 800,
                resizable: false,
                width: 650,
                resizable: false,
                modal: true,
                show: {
                        effect: "size",
                        duration: 1000
                },
                hide: {
                        effect: "size",
                        duration: 1000
                },
		close: function(event, ui){
			$("#client_card").val("");
		},
		buttons: {
			"Valider": function()
			{
				$("#client_retour").val($("#client_card").val());

				$(this).dialog("close");
			},
			"Réinitialiser": function()
			{
				$("#client_card").val("");
			},
		}
	});
  });

  $("#premier").click(function(){
        console.log("11111.....");
  });

  $("#second").click(function(){
	$("#deuxieme_modal").dialog({
		height: 800,
		resizable: false,
                width: 650,
		resizable: false,
                modal: true,
		show: {
			effect: "size",
			duration: 1000
		},
		hide: {
			effect: "size",
			duration: 1000
		},
		close: function(event, ui){
			$("#nom").val("");
			$("#prenom").val("");
			$("#iscidt").val("");
			$("#adresse_email").val("");
			$("#mot_de_passe").val("");
			$("#resaisir_mot_de_passe").val("");
			$("#naissance").val("");
			$("#telephone").val("");
			$("#personne_morale_adresse_physique").val("");
			$("#personne_morale_nom").val("");
		},
                buttons: {
                        "Inscrivez-vous": function()
			{
				//$("#inscription_form").submit();
				var verif_var = true;

				$(":input.required-field-inscription").each(function(){

					var input_value = $(this).val();

					//Si le champ est vide...
					if(input_value === "")
					{
						$(this).css("border-color", "#f8009b");

						$("#inscription_error_div").removeClass("hidden_div");

						verif_var = false;
					}
				});

				if(verif_var)
				{

					$("#inscription_form").submit();
				}
			},
			"Réinitialiser": function()
			{
				$("#nom").val("");
				$("#prenom").val("");
				$("#iscidt").val("");
				$("#adresse_email").val("");
				$("#mot_de_passe").val("");
				$("#resaisir_mot_de_passe").val("");
				$("#naissance").val("");
				$("#telephone").val("");
				$("#personne_morale_adresse_physique").val("");
                        	$("#personne_morale_nom").val("");
			},
                }
	});
  });

  $("#troisieme").click(function(){
	$("#troisieme_modal").dialog({
		height: 250,
		width: 420,
		resizable: false,
		modal: true,
		show: {
			effect: "size",
			duration: 1000
		},
		hide: {
			effect: "size",
			duration: 1000
		},
		close: function(event, ui)
		{
			$("#idt").val("");
			$("#mdp").val("");

			$(":input.required-field-connexion").css("border-color", "#ccc");

			$("#connexion_error_div").addClass("hidden_div");
		},
		buttons: {
                        "Connectez-vous": function()
			{
				var verif_var = true;

				$(":input.required-field-connexion").each(function(){
					var input_value = $(this).val();

					//Si le champs est vide....
					if(input_value === "")
                                	{
                                        	$(this).css("border-color", "#f8009b");

						$("#connexion_error_div").removeClass("hidden_div");

						verif_var = false;
                                	}
				});

				if(verif_var)
				{
					$("#connexion_form").submit();
				}
			},
			"Réinitialiser": function()
			{
				$("#idt").val("");
				$("#mdp").val("");

				$(":input.required-field-connexion").css("border-color", "#ccc");

				$("#connexion_error_div").addClass("hidden_div");
			},
                }
       });
  });
});
