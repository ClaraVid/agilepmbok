$(window).on("load", () => {
    $(".js-open-modal[name='procesos-pmbok']").each((index, currentElem) => {
        let arrId = [], salArrId = [];

        $("#prac-proc li[data-id='" + currentElem.dataset.pmboid + "']").each((index, childLi) => {
            arrId.push(childLi.dataset.praId);
        });

        arrId.forEach((id) => {
            $("p[data-prac-id='" + id + "']").last().clone().appendTo($(currentElem).find("td"));
        });

        arrId = [];

        $("." + currentElem.dataset.pmboid).each((index, childLi) => {
            salArrId.push(childLi.dataset.id);
        });

        salArrId.forEach((id) => {
            $("#sal-prac li[data-id='" + id + "']").each((index, childLi) => {
                arrId.push(childLi.dataset.praId);
            });
        });

        arrId.forEach((id) => {
            if (!$(currentElem).find("td p[data-prac-id='" + id + "']").length) {
                $("p[data-prac-id='" + id + "']").last().clone().appendTo($(currentElem).find("td"));
            }
        });
    });

    $("table").toggleClass("hidden");
});

$(document).ready(function () {
    $(".js-open-modal[name='procesos-pmbok']").on("click", function () {
        var thisElementData = $(this).data("pmboid");
        $("#modal-procesos .modal-content").addClass("hidden").find("ol").empty();
        $("#proc_" + thisElementData).removeClass("hidden");

        $("." + thisElementData).each(function () {
            var thisLiDesc = $(".li-id-desc-" + $(this).data("id")),
                thisLiAgil = $(".li-id-agil-" + $(this).data("id"));

            if (thisLiDesc.text().length > 0) {
                thisLiDesc.clone().appendTo("#proc_" + thisElementData + " .ol-desc");
                $(".tit-" + thisElementData).removeClass("hidden");
            }

            if (thisLiAgil.text().length > 0) {
                thisLiAgil.clone().appendTo("#proc_" + thisElementData + " .ol-agil");
                $(".agil-" + thisElementData).removeClass("hidden");
            }
        });

        $("#modal-procesos").modal();
    });

    $(".js-show-more, .js-show-less").on("click", function () {
        $(".js-show-more, .js-show-less").toggle();
        $(this).parent().next().find(".js-aux").toggleClass("lonely-col").next().toggleClass("hidden");
    });

    $("#modal-procesos").on("hidden.bs.modal", function () {
        $(".js-show-more").fadeIn();
        $(".js-show-less").fadeOut();

        $(".js-aux").addClass("lonely-col").next().addClass("hidden");
    });
});
